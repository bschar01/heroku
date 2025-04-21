const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Directs the app to go to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// This triggers the logic from stocks.js, need to make this my code...
app.get('/stocksFind', async (req, res) => {
  try {
    const question2 = req.query.question2;
    const question1 = req.query.question1;
    //console.log(question1, question2);
    const run = require('./stocksFind'); // import function
    await run(question1, question2); // run it
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
