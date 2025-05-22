const express = require('express');
const route = require('./routes/index.js');

const app = express();

app.get('/home', (req, res) => {
  res.send('OK');
});

console.log(route);

route(app);

module.exports = app;
