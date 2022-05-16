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
    const sql = "select * from store where email=? LIMIT 1";
    db.query(sql, [a.email], async (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        const user = result[0];
        if (result.length === 1) {
            const password = await bcrypt.compare(a.password, user.password,);
            // const password = decrypt('$2b$10$ad3h9Xdji0s2FfeErAbanOtDilhQeWOp7Hte5HD2WanNEyhIBSlr6', a.password);
            if (password) {
                const accessToken = await jwt.sign({ user }, process.env.jwtPrivateKey, { expiresIn: process.env.JWT_EXPIRES_IN });
                res.json({ accessToken, });
            }
        } else {
            return null;
        }
    })
});


module.exports = router;
