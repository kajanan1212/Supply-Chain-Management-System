const express = require("express");
const router = express.Router();
const db = require('../util/database');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require('lodash');


const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json())

router.post('/login', async (req, res) => {
    const a = req.body;
    const sql = "select * from customer where email=? LIMIT 1";
    db.query(sql, [a.email], async (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        const user = result[0];
        if (result.length === 1) {
            const password = await bcrypt.compare(a.password, user.password,);
            // const password = decrypt('$2b$10$ad3h9Xdji0s2FfeErAbanOtDilhQeWOp7Hte5HD2WanNEyhIBSlr6', a.password);
            if (password) {
                const accessToken = await jwt.sign({ user }, process.env.jwtPrivateKey, { expiresIn: "5m", });
                res.json({ accessToken, });
            }
        } else {
            return null;
        }
    })
});

router.post('/signup', async (req, res) => {
    const cus_id = _.uniqueId("customer_");
    const { email, first_name, last_name, password, confirmpassword, phone_num } = req.body;
    if (password !== confirmpassword) {

        res.send("Password not matching");
    }
    // console.log(password)
    let salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt)

    const sql = "INSERT INTO customer (`customer_id`,`email`, `first_name`, `last_name`, `phone_num`, `password`, `image`) VALUES (?,?,?,?,?,?,'user.jpg');"
    db.query(sql, [cus_id, email, first_name, last_name, phone_num, pass], async (err, result) => {
        if (err) {
            res.send({ err: err })
        }
    })
});

module.exports = router;
