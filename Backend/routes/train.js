// const express = require('express');
// const db = require('../util/database');

// const router = express.Router();

// router.get('/admin/trainschedule', (req, res) => {
//     const sql = "select train_id, destination, time_format(start_time,'%h:%i %p') as start_time,  time_format(end_time,'%h:%i %p') as end_time, capacity, stops, train_name from train";
//     db.query(sql, (err, result) => {
//         res.send(result);
//     })

// });

// module.exports = router;