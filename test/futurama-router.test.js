const request = require('supertest');
const app = require('../lib/app');

describe('futurama api routes', () => {

    it('can create a user with POST method', () => {
        return request(app)
            .post('/profile')
            .send({ name: 'kyle kyleson', favoriteChar: 'leela' })
            .then(res => {
                expect(res.body.name).toEqual('kyle kyleson');
                expect(res.body.favoriteChar).toEqual('leela');
            });
    });

    it('can get an array of users with GET', () => {
        return request(app)
            .post('/profile')
            .send({ name: 'kyle kyleson', favoriteChar: 'leela' })
            .then(res => {
                expect(res.body).toEqual({ name: 'kyle kyleson', favoriteChar: 'leela', tagline: expect.any(String) });
            });
    });

    it('can get a user by array index', () => {
        return request(app)
            .post('/profile')
            .send({ name: 'kyle kyleson', favoriteChar: 'leela' })
            .then(res => {
                expect(res.body).toEqual(({ name: 'kyle kyleson', favoriteChar: 'leela', tagline: expect.any(String) }));
            });
    });

    it('can update only a user\'s favoriteChar with PATCH method', () => {
        const newFave = {
            favoriteChar: 'fry'
        };

        return request(app)
            .patch('/profile/0')
            .send(newFave)
            .then(res => {
                expect(res.body).toEqual({
                    name: 'kyle kyleson',
                    favoriteChar: 'fry',
                    tagline: expect.any(String)
                });
            });
    });

    it('can delete a user by array index', () => {
        return request(app)
            .delete('/profile/0')
            .then(res => {
                expect(res.body).toEqual({ name: 'kyle kyleson', favoriteChar: 'fry', tagline: expect.any(String) });
            });
    });
    
});
