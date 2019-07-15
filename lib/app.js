const express = require('express');

const userRouter = require('../lib/routes/futurama');

const app = express();

//TODO: app.use(MIDDLEWARE)
// app.use(getRandomQuote);

app.use(express.json());

app.use('/profile', userRouter);

//TODO: implement err handling

// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });


// // eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     res.status(status);
//     res.send({ error: err, message: err.message });
// });

module.exports = app;
