 // Import required modules
const express = require('express');
const path = require('path');

// Create an express app
const app = express();

// Serve static files from a directory (like images, styles, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to show the image
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Image Page</h1><img src="/san.jpg" alt="Sample Image" />');
});

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});

