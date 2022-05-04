const express = require('express');
const db = require('../util/database');

const router = express.Router();

router.get('/', (req, res) => {
    const sql = "select * from product";
    db.query(sql, (err, result) => {
        res.send(result);
    })
});

router.post('/', (req, res) => {
    const a = req.body;
    a.forEach(element => {
        const sql = "UPDATE product SET quantity=? WHERE product_id=?";
        db.query(sql, [element.quantity - element.count, element.product_id], (err, result) => {
        })
    });
});


module.exports = router;
