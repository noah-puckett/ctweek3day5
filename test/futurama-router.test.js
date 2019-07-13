const request = require('supertest');
const app = require('../lib/app');

describe('futurama api routes', () => {

    it('can create a user with POST method', () => {
        return request(app)
            .post('/profile')
            .send({ name: 'kyle kyleson', favoriteChar: 'leela' })
            .then(res => {
                expect(res.body).toEqual({ name: 'kyle kyleson', favoriteChar: 'leela' });
            });
    });

    it('can get an array of users with GET', () => {
        return request(app)
            .get('/profile')
            .then(res => {
                expect(res.body).toEqual([{ name: 'kyle kyleson', favoriteChar: 'leela' }]);
            });
    });

    it('can get a user by array index', () => {
        return request(app)
            .get('/profile/0')
            .then(res => {
                expect(res.body).toEqual({ name: 'kyle kyleson', favoriteChar: 'leela' });
            });
    });

    //TODO: create test for PATCH method!!!

    // it('can update a user with put', () => {
    //     const newCreature = {
    //         type: 'goblin',
    //         color: 'ashy',
    //         teeth: 'at least 5',
    //         quality: 'screm babby'
    //     };

    //     return request(app)
    //         .put('/api/v1/creatures/0')
    //         .send(newCreature)
    //         .then(res => {
    //             expect(res.body).toEqual({
    //                 type: 'goblin',
    //                 color: 'ashy',
    //                 teeth: 'at least 5',
    //                 quality: 'screm babby'
    //             });
    //         });
    // });

    it('can delete a user by array index', () => {
        return request(app)
            .delete('/profile/0')
            .then(res => {
                expect(res.body).toEqual({ name: 'kyle kyleson', favoriteChar: 'leela' });
            });
    });

});
