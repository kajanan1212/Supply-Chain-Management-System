const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_buymore',
    password: 'password'
});

module.exports = db;