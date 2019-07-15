//superagent allows us to 'fetch' an asset
const request = require('superagent');

function getRandomQuote(char) {
    return request
        .get(`http://futuramaapi.herokuapp.com/api/characters/${char}/1`)
        .then(res => res.body);
}

module.exports = { getRandomQuote };
