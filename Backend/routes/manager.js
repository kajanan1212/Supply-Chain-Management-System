const express = require('express');
const db = require('../util/database');
const getUniqId = require('../common/crypto_id');

const router = express.Router();


router.post('/registerWorker', (req, res) => {
    const a = req.body.dataa;

    if (a.type === "Driver Assistant"){
        const assistant_id = getUniqId('pro')
        const sql = "INSERT INTO assistant (assistant_id, email, first_name, last_name, phone_num, salary) VALUES (?,?,?,?,?,?);"
        db.query(sql, [assistant_id, a.email, a.first_name, a.last_name, a.phoneNo, a.salary], (err, result) => {});
    }
    if (a.type === "Truck Driver"){
        const driver_id = getUniqId('pro')
        const sql = "INSERT INTO driver (driver_id, email, first_name, last_name, phone_num, salary) VALUES (?,?,?,?,?,?);"
        db.query(sql, [driver_id, a.email, a.first_name, a.last_name, a.phoneNo, a.salary], (err, result) => {});
    }
    if (a.type === "Shop Keeper"){
        const shopKeeper_id = getUniqId('pro')
        const sql = "INSERT INTO shopkeeper (driver_id, email, first_name, last_name, phone_num, salary) VALUES (?,?,?,?,?,?);"
        db.query(sql, [shopKeeper_id, a.email, a.first_name, a.last_name, a.phoneNo, a.salary], (err, result) => {});
    }
    
    
});



module.exports = router;
