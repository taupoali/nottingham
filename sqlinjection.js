const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

// Simulated user input (could be malicious)
const unsafeUserInput = "'; DROP TABLE users; --";
const safeUserInput = "john_doe123";

// Regular expression to allow only alphanumeric characters and underscores
const usernameRegex = /^[a-zA-Z0-9_]+$/;

// Function to validate input
function isValidInput(input) {
  return usernameRegex.test(input);
}

// Attempt query with unsafe input
if (isValidInput(unsafeUserInput)) {
  const safeQuery = "SELECT * FROM users WHERE username = ?";
  connection.execute(safeQuery, [unsafeUserInput], (err, results) => {
    if (err) {
      console.error("Safe Query Error:", err);
    } else {
      console.log("Safe Query Result:", results);
    }
  });
} else {
  console.log("🚨 Invalid username detected. Possible SQL injection attempt.");
}

// Attempt query with safe input
if (isValidInput(safeUserInput)) {
  const safeQuery = "SELECT * FROM users WHERE username = ?";
  connection.execute(safeQuery, [safeUserInput], (err, results) => {
    if (err) {
      console.error("Safe Query Error:", err);
    } else {
      console.log("Safe Query Result:", results);
    }
  });
} else {
  console.log("🚨 Invalid username detected. Possible SQL injection attempt.");
}

// Close the connection
connection.end();
