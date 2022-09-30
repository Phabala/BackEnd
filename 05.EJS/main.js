// Set express as Node.js web application server framework.
// To install express before using it as an application server by using "npm install express" command.

const express = require('express');
var app = express();

// Set EJS as templating engine.
app.set('view engine', 'ejs'); // 얘는 왜 철기쌤 코드에는 없을까. 없어도 되나?

app.get('/', function(req, res) {
    // The render method takes the name of the HTML page to be rendered as input.
    // This page should be in the views folder in the root directory.
    // We can pass multiple properties and values as an object, here we are passing the only name.

    var data = {name:'Phabala', 
        hobbies:['Playing Football', 'Playing Chess', 'Cycling']}
    console.log(data)
    res.render('home', {data:data}); // data:data 라고 하니까 약간 헷갈린다.
});

var server = app.listen(4000, function() {
    console.log('listening to port 4000')
});