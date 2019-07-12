const express = require('express');
//TODO: import middleware functions as necessary
const getRandomQuote = require('./services/futuramaApi');

const app = express();

//TODO: app.use(MIDDLEWARE)
app.use(getRandomQuote);

module.exports = app;
