const express = require('express');
const app = express();

// Lightweight middleware
app.use((req, res, next) => {
    var date = new Date();
    console.log('Received middleware1 request at :', date.getTime());
    next();
});

// Heavyweight middleware
app.use((req, res, next) => {
    var date = new Date();
    console.log('Received middleware2 request at :', date.getTime());
    for (let i = 0; i < 1000000000; i++); // time consuming!
    next();
});

// Route Handler
app.get('/', (req, res) => {
    res.send('Response from server')
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});