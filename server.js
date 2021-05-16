'use strict';

const express = require('express');
const app = express();

const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');

app.get('/',homeHandler);
app.get('/bad',badHandler);

function homeHandler (req, res) {
  res.send('welcome to server.js');
}

function badHandler (req, res)  {
  throw new Error('Something went wrong !');
}


app.use('*', notFoundHandler);
app.use(errorHandler);


function start(PORT) {
  app.listen(PORT, () => {
    console.log(`app is listen on port  ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};