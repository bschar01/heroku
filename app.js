const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the "index.html" directly from the main folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Change the path as needed
});

// Listen for incoming requests
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
