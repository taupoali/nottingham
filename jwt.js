const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // In a real application, keep this secret and secure

// Use body-parser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Dummy user data (in a real application, this would come from a database)
const users = [
    { id: 1, username: 'user1', password: '$2a$10$wz7lzKZk3zMO4dBF6OeBOu3sZP7MIz.9cAKX7lOzFAPcI9iApE9dC' } // password is "password"
];

// Route to authenticate users and issue JWTs
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Find the user in the database
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ error: 'User not found' });

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: 'Invalid password' });

    // Create a JWT
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    // Send the JWT to the client
    res.json({ token });
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // No token found

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = user; // Attach the user object to the request
        next();
    });
}

// Protected route - requires a valid JWT
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
