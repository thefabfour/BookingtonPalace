const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const Reviews = require('../database/Reviews.js');
const Users = require('../database/Users.js');

const app = express();
const port = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// code that describes incoming request type and from where
app.use((req, res, next) => {
  console.log(`${req.method} coming in from ${req.url}`);
  next();
});

app.use(express.static(PUBLIC_DIR));


app.get('/', (req, res) => {
    res.send('Hello World')
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})