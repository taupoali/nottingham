const express = require('express'); // Import the express module
const app = express();              // Create an express application

// Define a route that listens for GET requests at the root URL "/"
app.get('/', (req, res) => {
    res.send('Hello World!');        // Send "Hello World!" as the response
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
