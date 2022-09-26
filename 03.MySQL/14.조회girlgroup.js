const mysql = require('mysql');
const config = require('./../mysql.json');

const conn = mysql.createConnection(config);
conn.connect();
const use = 'USE girlgroup;';
const sql = `SELECT gid, name DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate, hit_song_id FROM girl_group;`; // 그냥 여기만 바꿔주면 되는건가?
const sql2 = `SELECT gid, name, DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate,hit_song_id FROM girl_group JOIN song ON girl_group.hit_song_id = song.sid;`
conn.query(use);
conn.query(sql2, (err, rows, fields) => { // fields 가 진짜 얼마 안쓰일까?
    if (err)
        throw err;
    for (let row of rows) {
    console.log(`${row.gid}\t${row.name}\t${row.debutDate}\t${row.hit_song_id}`);
    }
});
conn.end();