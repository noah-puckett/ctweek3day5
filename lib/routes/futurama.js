const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote'); 

const usersArr = [];

module.exports = Router()

    //CREATE a new profile to the array
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

    //READ a list of all profiles
    .get('/', (req, res) => {
        res.send(usersArr);
    })

    //READ a profile by id
    .get('/profile/:id', (req, res) => {
        res.send(usersArr[req.params.id]);
    })

    //UPDATE user (by id)'s favoriteChar, if they update favoriteChar fetch a new quote
    .patch('/:id', futuramaQuote, (req, res) => {
        const {
            favoriteChar
        } = req.body;

        const updatedUser = usersArr[req.params.id];

        updatedUser.favoriteChar = favoriteChar;
        updatedUser.tagline = req.quote.quote;

        res.send(updatedUser);
    })

    //DELETE profile by id
    .delete('/:id', (req, res) => {
        const deleted = usersArr.splice(req.params.id, 1);
        res.send(deleted[0]);
    });
