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
    const sql = [
        "select makedate(" + year + ",1) + interval " + part + " quarter - interval 1 quarter as start_date",
        "select  makedate(" + year + ",1) + interval " + part + " quarter - interval 1 day as end_date",
        "select sum(count) as total_product_sold from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ")",
        "select sum(total_price) as total_collection from customer_order where IsRequiredQuarter(date_time, " + year + ", " + part + ")",
        "select product_id from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ") group by product_id order by sum(count) desc limit 1",
        "select product_id from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ") group by product_id order by sum(count) limit 1",
        "select store_id from ((customer_order left outer join transports using(order_id)) left outer join routes using(route_id)) left outer join leads using(route_id) where IsRequiredQuarter(date_time, " + year + ", " + part + ") group by store_id order by count(store_id) desc limit 1",
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

module.exports = router;
