//superagent allows us to 'fetch' an asset
const request = require('superagent');

//TODO: delete this reference code
// function getRandomQuote(count) {
//     return request
//         .get(`futuramaapi.herokuapp.com/api/quotes/${count}/`)
//         .then(res => res.body);
// }

function getRandomQuote(char) {
    return request
        .get(`http://futuramaapi.herokuapp.com/api/characters/${char}/1`)
        .then(res => res.body);
}

module.exports = { getRandomQuote };
