//superagent allows us to 'fetch' an asset
const request = require('superagent');

function getRandomQuote(count) {
    return request
        .get(`futuramaapi.herokuapp.com/api/characters/<character name>/${count}`)
        .then(res => res.body);
}

module.exports = { getRandomQuote };
