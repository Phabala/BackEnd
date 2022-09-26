// run at /BackEnd/

const mysql = require('mysql');
const config = require('./../mysql.json');
console.log(config);

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
        const str = `${row.ID}\t${row.Name}\t${row.CountryCode}\t${row.District}\t${row.Population}`;
        console.log(str);
    }
    // console.log(fields);
    
})

connection.end();