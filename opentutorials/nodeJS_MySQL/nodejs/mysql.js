var mysql      = require('mysql');
var template = require('../lib/template.js');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 말아야 한다.
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'gisuser',
    password : 'gispass',
    database : 'opentutorials',
});
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    console.log('--------------');
    var list = template.list(results);
    console.log(list);
});

connection.end();

