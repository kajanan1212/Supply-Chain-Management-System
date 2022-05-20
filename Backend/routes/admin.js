const express = require('express');
const db = require('../util/database');
const getUniqId = require('../common/crypto_id');

const router = express.Router();

router.get('/neworder', (req, res) => {
    const sql = "select * from(((train left outer join places on(train.destination = places.district)) left outer join customer_order using (order_id)) left outer join has using(order_id)) where((order_id is not null) and state = 'created') order by date_time desc";
    db.query(sql, (err, result) => {
        res.send(result);
    })
});

router.get('/scheduledorder', (req, res) => {
    const sql = "select * from(((train left outer join places on(train.destination = places.district)) left outer join customer_order using (order_id)) left outer join has using(order_id)) where((order_id is not null) and state = 'trainsheduled' ) order by date_time desc";
    db.query(sql, (err, result) => {
        res.send(result);
    })
});

router.get('/pastorders', (req, res) => {
    const sql = "select * from customer_order order by date_time desc";
    db.query(sql, (err, result) => {
        res.send(result);
    })
});

router.get('/scheduletrainto', (req, res) => {
    const district = req.query;
    const sql = "select * from (places right outer join has using(order_id)) left outer join customer_order using(order_id) left outer join train on (train.destination = places.district ) where(district=? and state = 'created')  group by order_id; ";
    db.query(sql, [district['0']], (err, result) => {
        res.send(result)
    })
});



router.post('/scheduletrainto', (req, res) => {
    const a = req.body;
    const sql = a.map(ord_id => `UPDATE customer_order SET state = 'trainsheduled' WHERE (order_id = '` + ord_id + `')`)
    db.query(sql.join(';'), (err, result) => { });

});
router.post('/addproduct', (req, res) => {
    const a = req.body.dataa;
    const product_id = getUniqId('pro')
    // const sql3 = "insert into product(customer_id,order_id,address) values(?,?,?)"
    const sql = "INSERT INTO product (product_id, title, description, cost, img, capacity, quantity) VALUES (?,?,?,?,?,?,?);"
    db.query(sql, [product_id, a.title, a.description, a.price, a.image, a.capacity, a.quantity], (err, result) => { });
});

router.get('/trainschedule', (req, res) => {
    const sql = "select train_id, destination, time_format(start_time,'%h:%i %p') as start_time,  time_format(end_time,'%h:%i %p') as end_time, compartmentcapacity, stops, train_name from train";
    db.query(sql, (err, result) => {
        res.send(result);
    })
});

module.exports = router;
