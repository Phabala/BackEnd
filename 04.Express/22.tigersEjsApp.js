const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const dm = require('./db/tigers-module');
const template = require('./db/tigers-module.js');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    dm.getList(rows => {
        ejs.renderFile('views/22.index.ejs', {
            rows    // {rows: rows}
        }, (err, html) => {
            res.send(html);
        });
    });
    res.send(html);
});

app.get('/create', (req, res) => {
    ejs.renderFile('views/22.create.ejs', (err, html) => {
        res.send(html);
    });
})

app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});
app.listen(3001, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});