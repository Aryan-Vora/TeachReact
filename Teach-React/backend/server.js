const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Define a sample route
app.get('/hello', (req, res) => {
    res.send({message: "Hello, World!"});
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
