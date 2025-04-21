const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Directs the app to go to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle GET requests to /stocks
app.get('/stocks', (req, res) => {
  // Here you can handle the form data or just send a response
  res.send('You submitted the form!');  // Example response
});

// Listen for incoming requests
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
