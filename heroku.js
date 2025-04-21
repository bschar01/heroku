/*const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Log when server starts
console.log("Server starting...");

// Serve static files from 'public' folder (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request at root path (e.g. from form)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission with GET method
app.get('/submit', (req, res) => {
  const id = req.query.id;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("Success! This app is deployed online<br>");
  res.write("<h2>This is my hello application</h2>");
  res.write("The id is: " + id);
  res.end();

  console.log("Form submitted with id:", id);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); */

const express = require('express');
const path = require('path');
const app = express();
var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;
//var port = 8080;   //uncomment to run local

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Change the path as needed
});

console.log("This goes to the console window");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  urlObj = url.parse(req.url,true)
  id = urlObj.query.id
   res.write ("Success!  This app is deployed online");
  res.write("<h2>This is my hello application</h2>");
  res.write ("The id is: " + id)
  res.end();
  console.log('hey')
}).listen(port);
