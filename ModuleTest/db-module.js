// 여기에 모듈들을 저장하고
const mysql = require('mysql');
const config = require('./mysql.json');

module.exports = {
    getConnection: function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            if (err) {
                console.log('mysql connection error');
                console.log(err);
            }
        });
        return conn;
    },
    getListGirlGroup: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM girl_group;`;
        conn.query(sql, (err, rows, field) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    getListSong: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM song;`;
        conn.query(sql, (err, rows, field) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    searchGirlGroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM girl_group WHERE gid=?`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    searchSong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM song WHERE sid=?`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    insertGirlGroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `INSERT INTO girl_group (name, debut, hit_song_id)
                        VALUES (?, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    insertSong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `INSERT INTO song (title, lyrics)
                        VALUES (?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }
}