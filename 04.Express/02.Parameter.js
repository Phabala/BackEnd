const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send(`<h1>Hello World</h1>`);
});

app.get('/query', (request, response) => {
    const id = request.query.id; // ?id=123res
    response.send(`<h1>/query: id - ${id}</h1>`)
});

// http://localhost:3000/query?id=123
app.get('/params/id/:id', (request, response) => {
    const id = request.params.id;
    response.send(`<h1>/params/id: id - ${id}</h1>`);
});

app.get('*', (request, response) => {
    response.status(404).send('Path not found.');
})

app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});