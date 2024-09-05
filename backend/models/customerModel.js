const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true, match: /^\d{10}$/ },
    email: { type: String, required: true, match: /\S+@\S+\.\S+/ },
    address: { type: String, required: true },
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
