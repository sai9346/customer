const express = require('express');
const { createCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../controllers/customerController');
const validateCustomer = require('../middleware/validateMiddleware');
const router = express.Router();

router.route('/')
    .get(getCustomers)
    .post(validateCustomer, createCustomer);

router.route('/:id')
    .get(getCustomerById)
    .put(validateCustomer, updateCustomer)
    .delete(deleteCustomer);

module.exports = router;
