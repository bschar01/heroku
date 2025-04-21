const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Directs the app to go to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// This triggers the logic from stocks.js
app.get('/stocks', async (req, res) => {
  try {
    const runStockUpload = require('./stocks.js'); // import function
    await runStockUpload(); // run it
    res.send('Stocks uploaded to MongoDB successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading stocks.');
  }
});


// Listen for incoming requests
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
