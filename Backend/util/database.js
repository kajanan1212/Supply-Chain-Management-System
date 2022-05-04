const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

module.exports = db;