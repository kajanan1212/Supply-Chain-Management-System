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
console.log(getUniqId("assistant"))
const moment = require('moment');

const date = new Date().toLocaleTimeString();
const s = moment("10:03:42", "HH:mm:ss")
// console.log(s.diff("12:04:11", "HH:mm:ss"))

// INSERT INTO `customer_order` VALUES('ord_00f95e17229e5466', '2022-06-18 18:18:42', 'delivered', 330000, 110.00), ('ord_1770ab594749fdce', '2022-07-01 15:45:06', 'delivered', 265000, 60.00), ('ord_249071554b9e2c9a', '2022-06-18 18:15:02', 'delivered', 342000, 160.00), ('ord_2ac20da509e2757e', '2022-07-01 15:36:19', 'delivered', 23000, 15.00), ('ord_2e3f983f81f95054', '2022-06-18 18:21:24', 'delivered', 3000, 5.00), ('ord_4030d3baf57f76e6', '2022-07-01 15:17:40', 'delivered', 110000, 110.00), ('ord_4355796ec5bf9be2', '2022-06-18 17:55:30', 'delivered', 235000, 120.00), ('ord_583425231d7e2840', '2022-06-24 16:38:02', 'delivered', 186000, 65.00), ('ord_609c51aca5807365', '2022-07-01 16:46:56', 'delivered', 155000, 25.00), ('ord_611750384dff3819', '2022-07-01 15:05:09', 'delivered', 160000, 60.00), ('ord_67aec47c80993e65', '2022-07-01 16:44:33', 'delivered', 26000, 15.00), ('ord_7297da4e563cadef', '2022-06-18 18:05:42', 'delivered', 113000, 90.00), ('ord_77ded641cac8cfab', '2022-07-01 16:37:11', 'delivered', 89000, 15.00), ('ord_81380691fdb2affd', '2022-07-01 15:47:37', 'delivered', 33000, 10.00), ('ord_8868174ae0a8291a', '2022-07-01 16:42:41', 'delivered', 64000, 55.00), ('ord_88bd1bd4fa51ab6c', '2022-07-01 15:41:25', 'delivered', 74000, 40.00), ('ord_9407a2057c25963d', '2022-07-01 14:58:57', 'delivered', 175000, 35.00), ('ord_9672e351f3fb47b0', '2022-06-18 18:08:59', 'delivered', 280000, 70.00), ('ord_ba720377852a3d8d', '2022-07-01 16:40:13', 'delivered', 135000, 35.00);
// INSERT INTO `truck_schedule` VALUES('ts_1c70355c2c9bd22d', 'truck_1ea520fe4ed78e43', 'route_18', 'driver_890ea5b096b8abf1', 'assistant_23c294b8e21df320', '2022-07-01 16:45:38', '2022-07-01 11:15:59', '2022-07-01 12:15:59', 'end'), ('ts_24d98150e5f3d63f', 'truck_bd3350aa7b1f8856', 'route_3', 'driver_d90cd045533c44d3', 'assistant_1777ccfbe2f54e33', '2022-06-18 18:11:57', '2022-06-18 12:42:03', '2022-06-18 14:42:03', 'end'), ('ts_2ca16483f6c499c3', 'truck_7ec5089809aaeaba', 'route_14', 'driver_2a3d2719b2faefaa', 'assistant_0687595195f2ae2a', '2022-07-01 15:21:10', '2022-07-01 09:51:17', '2022-07-01 12:51:17', 'end'), ('ts_3a720fd2a0aa772f', 'truck_bd3350aa7b1f8856', 'route_14', 'driver_b51b222c8bfcae57', 'assistant_219d7eb66d781a0f', '2022-07-01 15:07:09', '2022-07-01 09:37:24', '2022-07-01 13:37:24', 'end'), ('ts_3c4f860030ef8c59', 'truck_bd3350aa7b1f8856', 'route_16', 'driver_890ea5b096b8abf1', 'assistant_5b46f662983f7380', '2022-07-01 16:41:22', '2022-07-01 11:11:29', '2022-07-01 16:11:29', 'end'), ('ts_400aafe85c846b12', 'truck_1ea520fe4ed78e43', 'route_7', 'driver_d53d553ef53c06db', 'assistant_6a8207f0bbfe2916', '2022-07-01 15:48:48', '2022-07-01 10:18:54', '2022-07-01 16:18:54', 'end'), ('ts_401985659f09858a', 'truck_1ea520fe4ed78e43', 'route_3', 'driver_43404d3c4bce93be', 'assistant_ac1309e9bf1fc143', '2022-06-18 18:01:30', '2022-06-18 12:31:54', '2022-06-18 13:31:54', 'end'), ('ts_404aff9e068e5282', 'truck_d6193228ab4f6435', 'route_13', 'driver_b51b222c8bfcae57', 'assistant_f6f6ac85eac5c7e3', '2022-07-01 15:46:07', '2022-07-01 10:16:12', '2022-07-01 12:16:12', 'end'), ('ts_44a72cd652d6256a', 'truck_3e4f69371b852c7e', 'route_23', 'driver_4668c0f63de09cd4', 'assistant_2664e1e2f4e741ad', '2022-07-01 15:42:39', '2022-07-01 10:12:44', '2022-07-01 13:12:44', 'end'), ('ts_45400546245964a5', 'truck_1ea520fe4ed78e43', 'route_3', 'driver_43404d3c4bce93be', 'assistant_e3452c798bde01f4', '2022-06-18 18:20:04', '2022-06-18 12:50:17', '2022-06-18 16:50:17', 'end'), ('ts_67bff3c7ddbd8a1c', 'truck_d6193228ab4f6435', 'route_25', 'driver_4668c0f63de09cd4', 'assistant_403e78f3c41df612', '2022-07-01 15:30:36', '2022-07-01 10:01:46', '2022-07-01 15:01:46', 'end'), ('ts_8168a013bc894d2e', 'truck_1ea520fe4ed78e43', 'route_24', 'driver_e924c01e94e4b726', 'assistant_2664e1e2f4e741ad', '2022-07-01 15:37:38', '2022-07-01 10:07:50', '2022-07-01 16:07:50', 'end'), ('ts_8813bab02683b3a0', 'truck_bd3350aa7b1f8856', 'route_3', 'driver_9d1926bef7bd19ff', 'assistant_cb80289cd53f4cf0', '2022-06-18 18:07:30', '2022-06-18 12:37:38', '2022-06-18 13:37:38', 'end'), ('ts_9725ad9708fb600c', 'truck_7ec5089809aaeaba', 'route_15', 'driver_8937ac2fe9ef2ba1', 'assistant_68a7a3b5a90dcaf9', '2022-07-01 16:38:40', '2022-07-01 11:08:52', '2022-07-01 13:08:52', 'end'), ('ts_a29e569ffe70318c', 'truck_d6193228ab4f6435', 'route_17', 'driver_604663e54f15791c', 'assistant_5b46f662983f7380', '2022-07-01 16:43:51', '2022-07-01 11:13:54', '2022-07-01 14:13:54', 'end'), ('ts_e292568f00ab2420', 'truck_3e4f69371b852c7e', 'route_3', 'driver_1f43be269dccf348', 'assistant_cb80289cd53f4cf0', '2022-06-18 18:22:36', '2022-06-18 12:52:50', '2022-06-18 16:52:50', 'end'), ('ts_e793143c9d986e69', 'truck_3e4f69371b852c7e', 'route_20', 'driver_8937ac2fe9ef2ba1', 'assistant_23c294b8e21df320', '2022-07-01 16:48:14', '2022-07-01 11:18:20', '2022-07-01 16:18:20', 'end');
// INSERT INTO `train_schedule` VALUES(2, 'ord_00f95e17229e5466', '2022-06-18 18:19:02', 'end'), (1, 'ord_1770ab594749fdce', '2022-07-01 15:45:22', 'end'), (2, 'ord_249071554b9e2c9a', '2022-06-18 18:15:20', 'end'), (4, 'ord_2ac20da509e2757e', '2022-07-01 15:36:44', 'end'), (2, 'ord_2e3f983f81f95054', '2022-06-18 18:21:36', 'end'), (1, 'ord_4030d3baf57f76e6', '2022-07-01 15:18:32', 'end'), (2, 'ord_4355796ec5bf9be2', '2022-06-18 17:56:10', 'end'), (4, 'ord_583425231d7e2840', '2022-06-24 16:39:03', 'end'), (5, 'ord_609c51aca5807365', '2022-07-01 16:47:15', 'end'), (1, 'ord_611750384dff3819', '2022-07-01 15:05:38', 'end'), (5, 'ord_67aec47c80993e65', '2022-07-01 16:44:49', 'end'), (2, 'ord_7297da4e563cadef', '2022-06-18 18:06:07', 'end'), (5, 'ord_77ded641cac8cfab', '2022-07-01 16:37:34', 'end'), (1, 'ord_81380691fdb2affd', '2022-07-01 15:47:49', 'end'), (5, 'ord_8868174ae0a8291a', '2022-07-01 16:42:56', 'end'), (4, 'ord_88bd1bd4fa51ab6c', '2022-07-01 15:41:53', 'end'), (4, 'ord_9407a2057c25963d', '2022-07-01 14:59:27', 'end'), (2, 'ord_9672e351f3fb47b0', '2022-06-18 18:09:14', 'end'), (5, 'ord_ba720377852a3d8d', '2022-07-01 16:40:28', 'end');







// --get the total count of products in past 120 days
// SELECT * FROM customer_order natural join has WHERE date_time > date_add(date_time, Interval - 120 day);

// --Most sold product
// select order_id, total_price, product_id, sum(count) as count FROM customer_order natural join has group by product_id order by count desc limit 1;
// select order_id, total_price, product_id, sum(count) as count FROM customer_order natural join has group by product_id order by count asc limit 1;

// SELECT DATE_ADD("2022-06-18 14:19:03", INTERVAL 10 DAY);   * /

const today = new Date();
const dae = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
console.log(dae)


// select truck_s_id, worker_id, sum(worked_hours) as total_hrs from(working_hour left outer join truck_schedule using(truck_s_id)) left outer join leads using(route_id) where(type = 'driver' and store_id = 'store_fd07fd48ae073554') group by(worker_id);

--Trigger 1
DELIMITER $$
CREATE TRIGGER train_schedule_after_schedule_order_to_train
	AFTER INSERT ON train_schedule
    FOR EACH ROW
BEGIN
	UPDATE customer_order
    SET state = 'trainsheduled'
    WHERE order_id = NEW.order_id;
END $$
DELIMITER;
insert into train_schedule(train_id, order_id) values("2", "ord_00f95e17229e5466");


--Trigger 2
DELIMITER $$
CREATE TRIGGER contains_after_schedule_order_to_truck
	AFTER INSERT ON contains
    FOR EACH ROW
BEGIN
	UPDATE customer_order
    SET state = 'truckscheduled'
    WHERE order_id = NEW.order_id;
END $$
DELIMITER;
insert into train_schedule(train_id, order_id) values("2", "ord_00f95e17229e5466");


--View


create view view_customer_without_auth as
    select customer_id, first_name from customer;

create view view_customer_with_orders as
    select customer_id, order_id, state, total_price, capacity, date_time from(places left outer join customer_order using(order_id)) left outer join customer using(customer_id);

create view view_product_with_orders as
    select * from(places right outer join has using(order_id)) left outer join product using(product_id);



--GET not consicutive every Worker
DELIMITER $$
CREATE PROCEDURE select_drivers(pStore_id varchar(32))
BEGIN
    DECLARE last_worker_id VARCHAR(32);
    
	SELECT driver_id
	INTO last_worker_id
	FROM truck_schedule left outer join leads using(route_id)
    where store_id = pStore_id
    ORDER BY date_time desc
    LIMIT 1;



SELECT *
    FROM driver left outer join hires on(driver.driver_id = hires.worker_id)
where(driver_id != last_worker_id AND store_id = pStore_id);
END $$
DELIMITER;

CALL select_drivers('store_fd07fd48ae073554');

-- ----FROM kajanan
use buymore;

SET @UsrYear = '2022';
SET @UsrQuarter = 1;

create function IsRequiredQuarter(date_time datetime)
returns int deterministic
return year(date_time) =@UsrYear and quarter(date_time) =@UsrQuarter;

###Period
# start date of nth quarter
select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 quarter;

# end date of nth quarter
select  makedate(@UsrYear, 1) + interval @UsrQuarter quarter - interval 1 day;

###Total product sold
select sum(count) as total_product_sold from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time);

###Total collection
select sum(total_price) as total_collection from customer_order where IsRequiredQuarter(date_time);

###Most sold order
select product_id from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time) group by product_id order by sum(count) desc limit 1;

###Least sold order
select product_id from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time) group by product_id order by sum(count) limit 1;

###Most engaged store
select store_id from((customer_order left outer join transports using(order_id)) left outer join routes using(route_id)) left outer join leads using(route_id) where IsRequiredQuarter(date_time) group by store_id order by count(store_id) desc limit 1;

###Total shipments
select count(*) as total_shipments from customer_order where IsRequiredQuarter(date_time) and state = 'delivered';

####Bottom
### Orders
select count(*) as orders from customer_order where  IsRequiredQuarter(date_time);

###Working hours
select sum(worked_hours) / 2 as working_hours from working_hour left outer join truck_schedule using(truck_s_id) where IsRequiredQuarter(date_time);

###Train transports
select count(order_id) as train_transports from train_schedule where IsRequiredQuarter(date_time) and state = 'end';

###Truck transports
select count(truck_s_id) as truck_transports from truck_schedule where IsRequiredQuarter(date_time) and state = 'end';

###Product sales
select sum(count) as product_sales from customer_order left outer join has using(order_id) where IsRequiredQuarter(date_time);
