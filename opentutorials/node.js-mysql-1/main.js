var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');
var db = mysql.createConnection({
  host : 'localhost', 
  user : 'gisuser', 
  password : 'gispass',
  database : 'opentutorials'
});
db.connect();

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if(pathname === '/'){
    if(queryData.id === undefined){
      db.query(`SELECT * FROM topic`, function(error, topics) { // topic 테이블 읽어오기
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics); // filelist가 아닌 topics
        var html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
    db.query(`SELECT * FROM topic`, function(error, topics) {
      if(error) {
        throw error;
      }
      db.query(`SELECT * FROM topic WHERE id = ?`,[queryData.id], function(error2, topic){
        if(error2) {
          throw error2;
        }
        var title = topic[0].title;
        var description = topic[0].description;
        var list = template.list(topics);
        var html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>
              <a href="/update?id=${queryData.id}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${queryData.id}">
                <input type="submit" value="delete">
              </form>`
        );
        response.writeHead(200);
        response.end(html);
        })
      });
    }
  } else if(pathname === '/create'){
    db.query(`SELECT * FROM topic`, function(error, topics) {
      var title = 'Create';
      var list = template.list(topics);
      var html = template.HTML(title, list,
        `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
      </form>
      `,
        `<a href="/create">create</a>`
      );
      response.writeHead(200);
      response.end(html);
    });
  } else if(pathname === '/create_process'){
    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        db.query(`
          INSERT INTO topic (title, description, created, author_id) 
            VALUES(?, ?, NOW(), ?)`,
          [post.title, post.description, 1], // ? 에 받는 인자를 배열로 받음
          function(error, result){ // 처리가 끝난 다음에 호출되는 콜백 함수
            if(error) { // error가 있다면
              throw error; // throw error
            }
            response.writeHead(302, {Location: `/?id=${result.insertId}`}); // 이게 뭐더라: response 객체의 메소드로, 헤더 정보를 response에 작성해서 내보내는 것. 첫번째 인자는 상태 코드를 지정하고 두번째 인수에 헤더 정보를 연관 배열로 정리한 것.
            response.end();
          }
        )
    });
    // 바꾸는 라인 ----------------시작-------------------
  } else if(pathname === '/update'){
    db.query(`SELECT * FROM topic`, function(error, topics){
      if(error) {
        throw error;
      }
      var filteredId = path.parse(queryData.id).base; // 여기는 안 바꿔도 되나?
      db.query(`data/${filteredId}`, 'utf8', function(err, description){
        var title = queryData.id;
        var list = template.list(filelist);
        var html = template.HTML(title, list,
          `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
    // 바꾸는 라인 --------------끝-----------------
  } else if(pathname === '/update_process'){
    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var description = post.description;
        fs.rename(`data/${id}`, `data/${title}`, function(error){
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
        });
    });
  } else if(pathname === '/delete_process'){
    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var filteredId = path.parse(id).base;
        fs.unlink(`data/${filteredId}`, function(error){
          response.writeHead(302, {Location: `/`});
          response.end();
        })
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);