const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', function (req, res) {
  res.send('Hello, this is the home page!');
});

// Define a route with a parameter
app.get('/users/:userId', function (req, res) {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a wildcard route for handling all other routes
app.get('*', function (req, res) {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
