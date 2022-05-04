app.post('/api/insert', (req, res) => {
    const { id, title, body, created_at } = req.body;
    const sql = "INSERT INTO product(id,title,body,created_at) VALUE (?,?,?,?)";

    db.query(sql, [id, title, body, created_at], (err, result) => {
        if (err) {
            console.log("ERROR " + err)
        } else {
            if (result.affectedRows === 1) {
                res.json({
                    success: true,
                    result
                })
            } else {
                res.json({
                    success: false,
                    result
                })
            }
        }
    })
    console.log(req.body);
});

app.put("/api/edit", (req, res) => {
    const a = req.body;
    console.log(a);
    const sql = "UPDATE product SET created_at=? WHERE id=?";
    db.query(sql, [created_at, id], (err, result) => {
        if (err) {
            console.log("ERROR WHEN UPDATING AN USER: " + err)
            res.json({
                success: false,
                err
            })
        } else {
            res.json({
                success: true,
                result
            })
        }
        console.log()
    })
})

app.post('/token', async (req, res) => {
    const refreshToken = req.header("x-auth-token");

    // If token is not provided, send error message
    if (!refreshToken) {
        res.status(401).json({
            errors: [
                {
                    msg: "Token not found",
                },
            ],
        });
    }

    try {
        const user = await JWT.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );
        res.send(user);
    } catch (error) {
        res.status(403).json({
            errors: [
                {
                    msg: "Invalid token",
                },
            ],
        });
    }
});


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