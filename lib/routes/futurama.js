const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

//TODO: possibly change /random to other path?
module.exports = Router()
    .get('/random', futuramaQuote, (req, res) => {
        res.send(req.quote);
    });
