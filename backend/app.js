const express = require('express');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customerRoutes');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/customers', customerRoutes);

app.use((req, res) => {
    res.status(404).send('Route not found');
});

module.exports = app;
