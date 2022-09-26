const mysql = require('mysql');
const config = require('./../mysql.json');

const conn = mysql.createConnection(config);
conn.connect();
let sql = `
    INSERT INTO tigers (player, backNo, POSITION)
    VALUES (?, ?, ?);`;
const params = ['박준표', 31, '투수'];
conn.query(sql, params, (err, field) => {
    if (err)
        throw err;

    sql = `SELECT * FROM tigers;`;
    conn.query(sql, (err, rows, fields) => { // fields 가 진짜 얼마 안쓰일까?
        if (err)
            throw err;
        for (let row of rows) {
        console.log(`${row.id}\t${row.player}\t${row.backNo}\t${row.isDeleted}`);
        }
    });
conn.end();
});