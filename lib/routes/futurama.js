const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote'); 

const usersArr = [];

//TODO: possibly change /random to other path?
module.exports = Router()

//TODO: delete reference code below

// .get('/random', futuramaQuote, (req, res) => {
//     res.send(req.quote);
// })
    
    //add a new profile to the array
    .post('/', futuramaQuote, (req, res) => {
        const {
            name,
            favoriteChar,
        } = req.body;

        const newProfile = {
            name,
            favoriteChar,
            tagline: req.quote.quote
        };

        usersArr.push(newProfile);
        res.send(newProfile);
    })

    //GET /profile get a list of all profiles
    .get('/', (req, res) => {
        res.send(usersArr);
    })
    //GET /profile/:id get a profile by id

    //PATCH /profile/:id update user (by id)'s favoriteChar, if they update favechar fetch a new quote

    //DELETE /profile/:id delete profile by id
;
