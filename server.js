const app = require('./lib/app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server successfully spun up on ${PORT}, good job!`);
});
