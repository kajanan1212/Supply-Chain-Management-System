const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./util/database')

app.use(express.json())


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
    const a = req.body;
    console.log(a);
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

app.post('/', (req, res) => {
    const a = req.body;
    a.forEach(element => {
        const sql = "UPDATE product SET quantity=? WHERE product_id=?";
        db.query(sql, [element.quantity - element.count, element.product_id], (err, result) => {
        })
    });
});

app.get('/trainschedule', (req, res) => {
    const sql = "select train_id, destination, time_format(start_time,'%h:%i %p') as start_time,  time_format(end_time,'%h:%i %p') as end_time, capacity, stops, train_name from train";
    db.query(sql, (err, result) => {
        res.send(result);
    })

});

app.post('/login', (req, res) => {
    const a = req.body;
    const sql = "select * from customer where email=?";
    db.query(sql, [a.email], (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        if (result.length === 1 && result[0].password === a.password) {
            // res.send("success");
            console.log("Success")
        } else {
            res.send("Wrong username or Password");
        }
    })
});

app.listen(3001, () => {
    console.log("Server running successfully 3001")
})