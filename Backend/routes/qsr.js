const express = require('express');
const db = require('../util/database');
const getUniqId = require('../common/crypto_id');

const router = express.Router();

router.post('/', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('./util/QSRs/result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

// router.get('/getQSRperiod', (req, res) => {
//     const sql = "select makedate('2022', 1) + interval 1 quarter - interval 1 quarter";
//     // const sql = ["SET @UsrYear = '2022'", "SET @UsrQuarter = 1", "select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 quarter", "select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 day"]
//     db.query(sql, (err, result) => {
//         // res.send(result);
//         console.log(1)
//         console.log(result)
//         console.log(err)
//     })
// })

router.get('/getAllDetails', (req, res) => {
    const { year, part } = req.query;
    console.log(year)
    const sql = [
        "select makedate(" + year + ",1) + interval " + part + " quarter - interval 1 quarter as start_date",
        "select  makedate(" + year + ",1) + interval " + part + " quarter - interval 1 day as end_date",
        "select sum(count) as total_product_sold from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ")",
        "select sum(total_price) as total_collection from customer_order where IsRequiredQuarter(date_time, " + year + ", " + part + ")",
        "select product_id from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ") group by product_id order by sum(count) desc limit 1",
        "select product_id from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ") group by product_id order by sum(count) limit 1",
        "select first_name from store where store_id = (select store_id from ((customer_order left outer join transports using(order_id)) left outer join routes using(route_id)) left outer join leads using(route_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ") group by store_id order by count(store_id) desc limit 1)",
        "select count(*) as total_shipments from customer_order where IsRequiredQuarter(date_time, " + year + ", " + part + ") and state='delivered';",
    ]

    db.query(sql.join(';'), (err, result) => {
        // console.log(result)
        res.send(result);
        // console.log(2)
        // console.log(err)
        // console.log(result)
    })
})

router.get('/getQSR_OVN', (req, res) => {
    const { year, part, oldYear, oldPart } = req.query

    const sql = [
        "select count(*) as orders from customer_order where  IsRequiredQuarter(date_time, " + year + ", " + part + ")",
        "select sum(worked_hours)/ 2 as working_hours from working_hour left outer join truck_schedule using(truck_s_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ")",
        "select count(order_id) as train_transports from train_schedule where IsRequiredQuarter(date_time, " + year + ", " + part + ") and state = 'end'",
        "select count(truck_s_id) as truck_transports from truck_schedule where IsRequiredQuarter(date_time, " + year + ", " + part + ") and state = 'end'",
        "select sum(count) as product_sales from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ")",

        "select count(*) as orders from customer_order where  IsRequiredQuarter(date_time, " + oldYear + ", " + oldPart + ")",
        "select sum(worked_hours)/ 2 as working_hours from working_hour left outer join truck_schedule using(truck_s_id) where IsRequiredQuarter(date_time, " + oldYear + ", " + oldPart + ")",
        "select count(order_id) as train_transports from train_schedule where IsRequiredQuarter(date_time, " + oldYear + ", " + oldPart + ") and state = 'end'",
        "select count(truck_s_id) as truck_transports from truck_schedule where IsRequiredQuarter(date_time, " + oldYear + ", " + oldPart + ") and state = 'end'",
        "select sum(count) as product_sales from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + oldYear + ", " + oldPart + ")"
    ]
    // const sql = ["SET @UsrYear = '2022'", "SET @UsrQuarter = 1", "select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 quarter", "select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 day"]
    db.query(sql.join(';'), (err, result) => {
        console.log(result)
        res.send(result);
        // console.log(1)
        // console.log(result)
        // console.log(err)
    })
})

router.get('/reports', (req, res) => {
    const sql = [
        "select product_id,title, sum(count) as ordered_count from (customer_order left outer join has using(order_id)) left outer join product using(product_id) group by title order by sum(count) desc",
        "select email as driver_email, store_name, driver_worked_hours from(select driver_id, first_name as store_name, driver_worked_hours from((select worker_id as driver_id, sum(worked_hours) as driver_worked_hours from working_hour where type = 'driver' group by worker_id) as t1 left outer join hires on(hires.worker_id = t1.driver_id and workerType = 'driver')) left outer join store using(store_id)) as t2 left outer join driver using(driver_id) order by driver_worked_hours desc limit 10",
        "select email as assistant_email, store_name, assistant_worked_hours from(select assistant_id, first_name as store_name, assistant_worked_hours from((select worker_id as assistant_id, sum(worked_hours) as assistant_worked_hours from working_hour where type = 'assistant' group by worker_id) as t1 left outer join hires on(hires.worker_id = t1.assistant_id and workerType = 'assistant')) left outer join store using(store_id)) as t2 left outer join assistant using(assistant_id) order by assistant_worked_hours desc limit 10",
        "select email, count(order_id) as total_order_count from customer left outer join places using(customer_id) where(customer.type='active') group by email order by email"
    ]
    // const sql = ["SET @UsrYear = '2022'", "SET @UsrQuarter = 1", "select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 quarter", "select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 day"]
    db.query(sql.join(';'), (err, result) => {
        // console.log(sql)
        res.send(result);
        // console.log(1)
        // console.log(result)
        // console.log(err)
    })
})

router.get('/report_route', (req, res) => {
    const { route, city } = req.query;
    sql = "select order_id, date_time, total_price, capacity, state from(((customer_order left outer join transports using(order_id)) left outer join routes using(route_id)) left outer join leads using(route_id)) left outer join store using(store_id) where routes.destination = " + db.escape(route) + " and store.first_name =  " + db.escape(city) + "  limit 10"
    db.query(sql, (err, result) => {
        console.log(sql)
        res.send(result);
        // console.log(1)
        // console.log(result)
        // console.log(err)
    })
})


module.exports = router;
