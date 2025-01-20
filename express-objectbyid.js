const express = require('express');
const app = express();

// Example: Simulated database
const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 34, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    // ... more books
];

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);         // Convert ID from string to number
    const book = books.find(b => b.id === bookId);
    
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
