// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json()); // Native JSON parser

// MongoDB connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB database connection established successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the server on DB connection error
});

// Routes
const itemRouter = require('./routes/items');
app.use('/items', itemRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
