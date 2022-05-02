const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Customer } = require('../models/customer');

async function getAllCustomer(req, res, next) {
    const allUsers = await Customer.fetchAll();
    res.send(allUsers);
}

async function postUser(req, res, next) {
    let user = await Customer.findByEmail(req.body.email);
    if (user) return res.status(400).send('User email already registered');

    user = new Customer(_.pick(req.body, ['name', 'email', 'password', 'gender']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['id', 'name', 'email', 'gender']));
    // pick mean {id:req.body.id,name:req.body.name}
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;