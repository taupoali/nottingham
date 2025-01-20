const express = require('express');
const morgan = require('morgan');
const app = express();

// Use morgan middleware for logging
app.use(morgan('dev')); // 'dev' format is concise and colored

// Define some routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Information');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});