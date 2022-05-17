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

// async function postUser(req, res, next) {
//     let user = await Customer.findByEmail(req.body.email);
//     if (user) return res.status(400).send('User email already registered');

//     user = new Customer(_.pick(req.body, ['name', 'email', 'password', 'gender']));
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     await user.save();

//     const token = user.generateAuthToken();
//     res.header('x-auth-token', token).send(_.pick(user, ['id', 'name', 'email', 'gender']));
//     // pick mean {id:req.body.id,name:req.body.name}
// }

// module.exports.getAllUsers = getAllUsers;
// module.exports.postUser = postUser;
// => f9b327e70bbcf42494ccb28b2d98e00e

// const getUniqId = require("../common/crypto_id");
// console.log(getUniqId("customer"))

const c = {
    "order_id": "ord_87db3087d50b4d70",
    "product_id": "pro_16",
    "count": 1,
    "customer_id": "customer_3fe9234cd3ebba5b",
    "address": "asf",
    "city": "fort",
    "district": "colombo",
    "date_time": "2022-05-16T12:26:29.000Z",
    "state": "created",
    "total_price": 22000,
    "capacity": 400,
    "train_id": 1,
    "train_name": "Nuwara Devi",
    "destination": "Colombo",
    "start_time": "06:00:00",
    "end_time": "09:00:00",
    "stops": "Kegalle,Veyangoda,Gampaha,Colombo"
}

console.log(c.capacity)