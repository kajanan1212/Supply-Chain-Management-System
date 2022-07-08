const express = require('express');
const db = require('../util/database');
const getUniqId = require('../common/crypto_id');
const pdf = require('html-pdf');

const pdfTemplate = require('../util/QSR_pdf_Templete');
const path = require('path');
const router = express.Router();

router.post('/', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('./util/QSRs/result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

router.get('/', (req, res) => {
    // let newPath = path.join(__dirname, '../util/QSRs/')
    // // console.log(newPath)
    // res.sendFile(newPath + 'result.pdf');
})
router.get('/detail', (req, res) => {
    const sql = ["select count(*) as count from store", "select count(*) as count from product", "select count(*) as count from train"]
    db.query(sql.join(';'), (err, result) => {
        res.send(result);
    })
})

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

//Trigger added 1
router.post('/scheduletrainto', (req, res) => {
    const { orderID, train_id } = req.body;
    // const sql2 = orderID.map(ord_id => "UPDATE customer_order SET state= 'trainsheduled' WHERE (order_id=" + db.escape(ord_id) + ")")
    const sql = orderID.map(ord_id => "INSERT INTO train_schedule (train_id, order_id) VALUES (" + db.escape(train_id) + "," + db.escape(ord_id) + ")")
    // const sql = sql1.concat(sql2);
    // console.log(sql)
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

router.get('/scheduletrain', (req, res) => {
    const sql = ["select lower(destination) as district from train", "SELECT distinct district FROM places natural join train_schedule where (state='scheduled' or state ='shipping');"];
    db.query(sql.join(';'), (err, result) => {
        res.send(result);
    })
})

router.get('/loadtotrain', (req, res) => {
    const sql = "select * from (customer_order left outer join train_schedule using(order_id)) left outer join train using(train_id) where train_schedule.state='scheduled'";
    db.query(sql, (err, result) => {
        res.send(result);
    })
})

router.post('/loadtotrain', (req, res) => {
    const trainShipping = req.body.map(id => "update train_schedule set state='shipping' where (train_id = " + db.escape(id) + " and state='scheduled')");
    const OrderTransport = req.body.map(id => "update customer_order set state = 'traintransport' where order_id in (select order_id from train_schedule where (train_id = " + db.escape(id) + " and state = 'shipping'))");
    const arr = trainShipping.concat(OrderTransport);
    db.query(arr.join(';'), (err, result) => {
        console.log(err)
    })
})

module.exports = router;
