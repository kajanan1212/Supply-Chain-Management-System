const customer = require('../controllers/customer');
const express = require('express');
const router = express.Router();

router.get('/', customer.getAllUsers);
router.post('/', customer.postUser);

module.exports = router;
