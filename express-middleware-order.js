const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
    console.log('Middleware 1: Executed');
    req.customProperty = 'Hello from Middleware 1';
    next(); // Passes control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
    console.log('Middleware 2: Executed');
    console.log(req.customProperty); // Access the modified request object
    next(); // Passes control to the next middleware
});

// Route Handler
app.get('/', (req, res) => {
    console.log('Route Handler: Executed');
    res.send('Response from Route Handler');
});

// Middleware 3 (This would not run for the '/' route because it's defined after the route handler)
app.use((req, res, next) => {
    console.log('Middleware 3: Executed');
    next();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
