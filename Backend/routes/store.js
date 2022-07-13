const express = require("express");
const router = express.Router();
const db = require('../util/database');
const getUniqId = require('../common/crypto_id');


const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json())

router.get('/setroutes', (req, res) => {
    const data = req.query[0];
    const sql = ["select * from (customer_order natural join places) join view_store_without_auth on (view_store_without_auth.first_name = district)where (store_id=?  and state='recievedstore')", "select * from routes natural join leads where store_id = ?"]
    db.query(sql.join(";"), [data, data], (err, result) => {
        res.send(result);
        // console.log(err)
    })
});

router.get('/finishedorders', (req, res) => {
    const data = req.query[0];
    // console.log(data)
    const sql = "select * from (customer_order natural join places) left outer join view_store_without_auth on(places.district=view_store_without_auth.first_name) where store_id=" + db.escape(data) + " order by date_time desc;"
    db.query(sql, [data, data], (err, result) => {
        res.send(result);
        // console.log(err)
    })
});

router.get('/scheduledOrder', (req, res) => {
    const data = req.query[0];
    // console.log(data)
    const sql = "select * from (customer_order natural join places) left outer join view_store_without_auth on(places.district=view_store_without_auth.first_name) where (store_id=" + db.escape(data) + " and state in ('routescheduled', 'truckscheduled', 'ontheway')) order by date_time;"
    db.query(sql, [data, data], (err, result) => {
        res.send(result);
        // console.log(err)
    })
});

router.post('/setroutes', (req, res) => {
    const data = req.body.filter(m => m.route !== undefined);
    // console.log(data)
    const sql = data.map(d => (
        "Insert into transports values(" + db.escape(d.route) + "," + db.escape(d.order_id) + ")"
    ))
    db.query(sql.join(";"), (err, result) => { })
    const sql2 = data.map(d => (
        "update customer_order set state='routescheduled'  where order_id in (select  order_id from places where district = (select first_name from view_store_without_auth where store_id=" + db.escape(d.store_id) + " and order_id=" + db.escape(d.order_id) + ")) "
    ))
    // console.log(sql2)
    db.query(sql2.join(";"), (err, result) => { })
});

router.get('/ordersontrain', (req, res) => {
    const data = req.query[0]
    const sql = "select * from customer_order where order_id in (select order_id from places where (district = (select first_name from view_store_without_auth where store_id = ?)) and state='traintransport')";
    db.query(sql, data, (err, result) => {
        res.send(result);
    })
})

router.post('/ordersontrain', (req, res) => {
    const data = req.body;
    // console.log(data)
    const sql = data.map(d => (
        "Update customer_order set state='recievedstore' where order_id=" + db.escape(d.order_id) + "; Update train_schedule set state='end' where order_id=" + db.escape(d.order_id) + ""
    ))
    db.query(sql.join(";"), (err, result) => { })
});

router.get('/scheduletruck', (req, res) => {
    const store_id = req.query[0];
    const sql = [
        "select * from routes natural join leads where store_id=" + db.escape(store_id) + "",

        "select * from ((leads left outer join routes using(route_id)) left outer join transports using(route_id)) left outer join customer_order using(order_id) where (state='routescheduled' and store_id=" + db.escape(store_id) + ")",

        "select * from (truck natural join owns) where truck_id not in  (select truck_id from truck_schedule where (state='ondelivery' or state='scheduled') ) and store_id=" + db.escape(store_id) + "",

        "select worker_id as assistant_id from view_store_without_auth left outer join hires using(store_id) where hires.workerType = 'assistant' and view_store_without_auth.store_id = " + db.escape(store_id) + " and((hires.worker_id not in (select * from(select assistant_id from(truck_schedule left outer join assistant using(assistant_id)) left outer join hires on assistant.assistant_id = hires.worker_id where hires.workerType = 'assistant' and hires.store_id = " + db.escape(store_id) + " order by date_time desc limit 2) as last_scheduled_assistant)) or (1 not in(select * from(select  count(assistant_id) from (select distinct assistant_id from (select assistant_id from (truck_schedule left outer join assistant using(assistant_id)) left outer join hires on assistant.assistant_id = hires.worker_id where hires.workerType = 'assistant' and hires.store_id = " + db.escape(store_id) + " order by date_time desc limit 2) as t1) as t2) as t3)))",

        "CALL select_drivers(" + db.escape(store_id) + ")",
    ]
    db.query(sql.join(';'), (err, result) => {
        // console.log(result[5])
        res.send(result);
    })
})

//Trigger added 2
router.post('/scheduletruck', (req, res) => {
    const { truck_id, assistant, driver_id, route_id, products } = req.body;
    const scheduleID = getUniqId('ts');
    const contains = products.map(pro => { return "Insert into contains(truck_s_id,order_id) values('" + scheduleID + "','" + pro.order_id + "')" })
    // const order = products.map(pro => { return "UPDATE customer_order set state='truckscheduled' where order_id='" + pro.order_id + "'" })
    // const tempSQL = contains.concat(order);
    const sql1 = "insert into truck_schedule(`truck_s_id`, `truck_id`, `route_id`, `driver_id`, `assistant_id`) VALUES ('" + scheduleID + "', '" + truck_id + "', '" + route_id + "', '" + driver_id + "', '" + assistant + "')";
    contains.push(sql1);
    // console.log(contains)
    db.query(contains.join(';'), (err, result) => {
        res.send(result);
    })
})

router.get('/driverondelivery', (req, res) => {
    const data = req.query[0];
    const sql = "select * from truck_schedule left outer join leads using(route_id) where state!='end' and store_id=?";
    db.query(sql, [data], (err, result) => {
        res.send(result);
    })
})

router.post('/driverondelivery', (req, res) => {
    const { scheduleId, state, driver_id, assistant_id } = req.body;
    const time = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // console.log(scheduleId)
    let sql = [];
    if (state === 'ondelivery') {
        sql = ["UPDATE truck_schedule SET state='ondelivery',start_time = '" + time + "'WHERE (`truck_s_id` = '" + scheduleId + "')", "INSERT INTO working_hour (`truck_s_id`, `worker_id`, `type`) VALUES ('" + scheduleId + "', '" + driver_id + "', 'driver')", "INSERT INTO working_hour (`truck_s_id`, `worker_id`, `type`) VALUES ('" + scheduleId + "', '" + assistant_id + "', 'assistant')", "update customer_order set state = 'ontheway' where order_id in (select order_id from contains where truck_s_id='" + scheduleId + "')"]
    } else {
        sql = ["UPDATE truck_schedule SET state='end',end_time = '" + time + "' WHERE (`truck_s_id` = '" + scheduleId + "')", "update  working_hour left outer join truck_schedule using(truck_s_id) set worked_hours=REPLACE(SUBSTRING(sec_to_time(TIMESTAMPDIFF(SECOND,start_time,end_time)),2,4),':','.')  where (truck_s_id = '" + scheduleId + "') ", "update customer_order set state = 'delivered' where order_id in (select order_id from contains where truck_s_id='" + scheduleId + "')"]

    }
    db.query(sql.join(';'), (err, result) => { })
})

router.get('/', (req, res) => {
    const data = req.query['0'];
    const sql = ["select count(route_id) as data from leads where store_id=?", "select count(truck_id) as data from owns where store_id=?", "select count(worker_id) as data from hires where store_id=?", "select count(*) as data from customer_order where order_id in (select order_id from places where (district = (select first_name from view_store_without_auth where store_id = ?)) and state='traintransport')"]
    db.query(sql.join(';'), [data, data, data, data], (err, result) => {
        res.send(result);
    })
})

module.exports = router;
