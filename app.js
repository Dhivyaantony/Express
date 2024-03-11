const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello my dears');
});

app.get('/home', function (req, res) {
    const id = req.query.id;
    const name = req.query.name;

    if (id && name) {
        console.log({ id, name });
        res.send('home');
    } else {
        res.send('Welcome to the home page');
    }
});

// Error handling for 404 Not Found
app.use(function(req, res, next) {
  res.status(404).send("Sorry, can't find that!");
});

// Error handling for other errors
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
