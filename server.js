const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from config file
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all restaurants'});
});

app.get('/api/v1/restaurants/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Show restaurant with ID: ${req.params.id}`});
});

app.post('/api/v1/restaurants', (req, res) => {
    res.status(201).json({success: true, msg: 'Create new restaurant'});
});

app.put('/api/v1/restaurants/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update restaurant with ID: ${req.params.id}`});
});

app.delete('/api/v1/restaurants/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete restaurant with ID: ${req.params.id}`});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));