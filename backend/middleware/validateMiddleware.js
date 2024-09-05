const Joi = require('joi');

const customerValidationSchema = Joi.object({
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).required(),
    phone_number: Joi.string().pattern(/^\d{10}$/).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(1).required(),
});

const validateCustomer = (req, res, next) => {
    const { error } = customerValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

module.exports = validateCustomer;
