const { getRandomQuote } = require('../services/futuramaApi');

module.exports = (req, res, next) => {
    getRandomQuote(req.body.favoriteChar)
        .then(quote => {
            req.quote = quote[0];
            next();
        });
};
