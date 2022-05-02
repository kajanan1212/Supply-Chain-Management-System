const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(express.json())

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_buymore',
    password: 'password'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    const sql = "select * from product";
    db.query(sql, (err, result) => {
        res.send(result);
    })
});

app.post('/api/insert', (req, res) => {
    const { id, title, body, created_at } = req.body;
    const sql = "INSERT INTO product(id,title,body,created_at) VALUE (?,?,?,?)";

    db.query(sql, [id, title, body, created_at], (err, result) => {
        if (err) {
            console.log("ERROR " + err)
        } else {
            if (result.affectedRows === 1) {
                res.json({
                    success: true,
                    result
                })
            } else {
                res.json({
                    success: false,
                    result
                })
            }
        }
    })
    console.log(req.body);
});

app.put("/api/edit", (req, res) => {
    const { created_at, id } = req.body;
    const sql = "UPDATE product SET created_at=? WHERE id=?";
    db.query(sql, [created_at, id], (err, result) => {
        if (err) {
            console.log("ERROR WHEN UPDATING AN USER: " + err)
            res.json({
                success: false,
                err
            })
        } else {
            res.json({
                success: true,
                result
            })
        }
        console.log()
    })
})

app.get('/trainschedule', (req, res) => {
    const sql = "select train_id, destination, time_format(start_time,'%h:%i %p') as start_time,  time_format(end_time,'%h:%i %p') as end_time, capacity, stops, train_name from train";
    db.query(sql, (err, result) => {
        res.send(result);
    })
});

app.listen(3001, () => {
    console.log("Server running successfully 3001")
})