const mysql = require('mysql2');

// Create a connection to database

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'EuroCentral2012',
    database: 'pubs',
    port: 3307
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

connection.query("SELECT * FROM authors", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    
    result.forEach(row => {
        // Extract specific keys from the row
        const id = row.au_id;
        const firstname = row.au_fname;
        const lastname = row.au_lname;

        // You can now manipulate or use these variables as needed
        console.log(`User ID: ${id}, First Name: ${firstname}, Surname: ${lastname}`);
    });
});

connection.end();

