//Needed
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "../../FrontEnd/src/Images")
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })
// const upload = multer({ storage: storage })







// app.post('/api/insert', (req, res) => {
//     const { id, title, body, created_at } = req.body;
//     const sql = "INSERT INTO product(id,title,body,created_at) VALUE (?,?,?,?)";

//     db.query(sql, [id, title, body, created_at], (err, result) => {
//         if (err) {
//             console.log("ERROR " + err)
//         } else {
//             if (result.affectedRows === 1) {
//                 res.json({
//                     success: true,
//                     result
//                 })
//             } else {
//                 res.json({
//                     success: false,
//                     result
//                 })
//             }
//         }
//     })
//     console.log(req.body);
// });

// app.put("/api/edit", (req, res) => {
//     const a = req.body;
//     console.log(a);
//     const sql = "UPDATE product SET created_at=? WHERE id=?";
//     db.query(sql, [created_at, id], (err, result) => {
//         if (err) {
//             console.log("ERROR WHEN UPDATING AN USER: " + err)
//             res.json({
//                 success: false,
//                 err
//             })
//         } else {
//             res.json({
//                 success: true,
//                 result
//             })
//         }
//         console.log()
//     })
// })

// app.post('/token', async (req, res) => {
//     const refreshToken = req.header("x-auth-token");

//     // If token is not provided, send error message
//     if (!refreshToken) {
//         res.status(401).json({
//             errors: [
//                 {
//                     msg: "Token not found",
//                 },
//             ],
//         });
//     }

//     try {
//         const user = await JWT.verify(
//             refreshToken,
//             process.env.REFRESH_TOKEN_SECRET
//         );
//         res.send(user);
//     } catch (error) {
//         res.status(403).json({
//             errors: [
//                 {
//                     msg: "Invalid token",
//                 },
//             ],
//         });
//     }
// });


//models/customer

// const bcrypt = require('bcrypt');
// const _ = require('lodash');
// const { Customer } = require('../models/customer');

// // async function getAllCustomer(req, res, next) {
// //     const allUsers = await Customer.fetchAll();
// //     res.send(allUsers);
// // }
const bcrypt = require("bcrypt");

async function postUser(pass) {
    // let user = await Customer.findByEmail(req.body.email);
    // if (user) return res.status(400).send('User email already registered');

    // user = new Customer(_.pick(req.body, ['name', 'email', 'password', 'gender']));
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(pass, salt);
    // console.log(password);
    // await user.save();

    // const token = user.generateAuthToken();
    // res.header('x-auth-token', token).send(_.pick(user, ['id', 'name', 'email', 'gender']));
    // pick mean {id:req.body.id,name:req.body.name}
}
postUser('buymore_colombo_001')
// module.exports.getAllUsers = getAllUsers;
// module.exports.postUser = postUser;
// => f9b327e70bbcf42494ccb28b2d98e00e

const getUniqId = require("../common/crypto_id");
console.log(getUniqId("route"))
const moment = require('moment');

const date = new Date().toLocaleTimeString();
const s = moment("10:03:42", "HH:mm:ss")
// console.log(s.diff("12:04:11", "HH:mm:ss"))

// console.log(new Date())
// var now = moment(new Date()); //todays date
// var end = moment("12:03:42", "HH:mm:ss"); // another date
// var duration = moment.duration(now.diff(end));
// var days = duration.asDays();
// console.log(days)driver_4668c0f63de09cd4
// insert into leads(route_id, store_id) values("route_7", "store_1b10c3f92d9be701");
// insert into leads(route_id, store_id) values("route_8", "store_1b10c3f92d9be701");
// insert into leads(route_id, store_id) values("route_9", "store_1b10c3f92d9be701");
// insert into leads(route_id, store_id) values("route_10", "store_1b10c3f92d9be701");
// insert into leads(route_id, store_id) values("route_11", "store_1b10c3f92d9be701");
// insert into leads(route_id, store_id) values("route_12", "store_1b10c3f92d9be701");
// insert into leads(route_id, store_id) values("route_13", "store_1b10c3f92d9be701");
// insert into leads(route_id, store_id) values("route_14", "store_1b10c3f92d9be701");


insert into leads(route_id, store_id) values("route_15", "store_b75d288ed6dd8aa1");
insert into leads(route_id, store_id) values("route_16", "store_b75d288ed6dd8aa1");
insert into leads(route_id, store_id) values("route_17", "store_b75d288ed6dd8aa1");
insert into leads(route_id, store_id) values("route_18", "store_b75d288ed6dd8aa1");
insert into leads(route_id, store_id) values("route_19", "store_b75d288ed6dd8aa1");
insert into leads(route_id, store_id) values("route_20", "store_b75d288ed6dd8aa1");

insert into leads(route_id, store_id) values("route_21", "store_d207fd48aeinfnna2");
insert into leads(route_id, store_id) values("route_22", "store_d207fd48aeinfnna2");
insert into leads(route_id, store_id) values("route_23", "store_d207fd48aeinfnna2");
insert into leads(route_id, store_id) values("route_24", "store_d207fd48aeinfnna2");
insert into leads(route_id, store_id) values("route_25", "store_d207fd48aeinfnna2");








--get the total count of products in past 120 days
SELECT * FROM customer_order natural join has WHERE date_time > date_add(date_time, Interval - 120 day);

--Most sold product
select order_id, total_price, product_id, sum(count) as count FROM customer_order natural join has group by product_id order by count desc limit 1;
select order_id, total_price, product_id, sum(count) as count FROM customer_order natural join has group by product_id order by count asc limit 1;

SELECT DATE_ADD("2022-06-18 14:19:03", INTERVAL 10 DAY);   