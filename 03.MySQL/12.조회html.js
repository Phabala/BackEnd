// run at /BackEnd/
const fs = require('fs');
const mysql = require('mysql');
const config = require('./../mysql.json');
let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country Code</th>
            <th>District</th>
            <th>Population</th>
        </tr>
    </table>
</body>
</html>`

/* config = {
    host: 'localhost', 
    user:'gisuser',
    password: 'gispass', 
    port: 3306,
    database: 'world'       // use world
}

const fs = require('fs');
fs.writeFile('mysql.json', JSON.stringify(config), err => {

}); */

const connection = mysql.createConnection(config);

connection.connect(); // MySQL DB에 접속
const sql = `SELECT * FROM city WHERE population > 900000;`;
connection.query(sql, (err, rows, fields) => { // 이걸 왜 쓴다고?
    if (err) {
        throw err;
    }
    // console.log(rows); // rows : 배열 타입
    for (let row of rows) {
        let line = '<tr>';
        line += `<td>${row.ID}</td><td>${row.Name}</td><td>${row.CountryCode}</td><td>${row.District}</td><td>${row.Population}</td>`;
        line += `</tr>\n`
        html += line;
    }
    html += `
    </table>
</body>
</html>
`;
    fs.writeFile('12.table.html', html, err => {

    });
    // console.log(fields);
    
})

connection.end();