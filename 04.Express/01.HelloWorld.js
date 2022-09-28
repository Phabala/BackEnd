const express = require('express');
const app = express();

// use - 무엇인가를 사용하겠다. MiddleWare 사용
// http method - get, post, put, delete, all
// listen - 대기

app.get('/', (request, response) => { // fallthrough 라고 생각하면 될 듯 하다.
    response.send(`<h1>Hello World</h1>`);
});

app.get('/create', (request, response) => {

});

app.get('/post', (request, response) => {

});

// routing path 별 처리해 주는 함수

app.get('*', (request, response) => {
    response.status(404).response.send('Path not found.');
})

app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});

// 왜 path로 주는걸 더 선호하는지?
// 2000년대 초반에는 Apache, PHP, MySQL 을 많이 했다. 이거는 패스를 처리 못했는데
// 요즘에는 APM의 전성시대가 아니긴 하다. 
// 결국에는 path 를 왜 더 선호하는지 듣지 못했다.