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

router.get('/totalproducts', (req, res) => {
    // console.log('summa')
    const sql = "select count(*) as count from customer_order right outer join has using (order_id) group by month(date_time) order by date_time desc limit 2;"
    db.query(sql, (err, result) => {
        res.send(result);
    })
})

module.exports = router;
