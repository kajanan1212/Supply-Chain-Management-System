const express = require('express');
const db = require('../util/database');
const _ = require('lodash');

const router = express.Router();

router.get('/', (req, res) => {
    const sql = ["select * from product", "select * from district order by district asc"]
    db.query(sql.join(';'), (err, result) => {
        res.send(result);
    })
});


router.post('/', (req, res) => {
    const a = req.body.dataa;
    const cost = req.body.cost;
    const capacity = req.body.capacity;
    const order_id = _.uniqueId('ord_');

    a.carts.forEach(element => {
        const sql1 = "UPDATE product SET quantity=? WHERE product_id=?";
        db.query(sql1, [element.quantity - element.count, element.product_id], (err, result) => {
        })

        const sql2 = "insert into has(order_id,product_id,count) values(?,?,?)";
        db.query(sql2, [order_id, element.product_id, element.count], (err, result) => { });
    });
    const address = a.address + ", " + a.city + ", " + a.district;
    const sql3 = "insert into places(customer_id,order_id,address) values(?,?,?)"
    db.query(sql3, [1, order_id, address], (err, result) => { });

    const sql4 = "insert into customer_order(order_id,total_price,capacity) values (?,?,?)";
    db.query(sql4, [order_id, cost, capacity], (err, result) => { });

});

module.exports = router;
