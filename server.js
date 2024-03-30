const express = require('express');
const app = express();
const redis = require('redis');

app.use(express.json());

const redisOptions = {
    socket: {
        host: 'host here',
        port: 00000,
    },
    password: 'passwordhere',

};

const client = redis.createClient(redisOptions);
client.on('error', (err) => console.log('Redis Client Error', err));

app.post('/log', async (req, res) => {
    try {
        await client.connect();

        const count = await client.incr('log:counter');
        const key = `log:${count}`;

        await client.set(key, req.body.message);
        console.log(`Message logged under ${key}`);

        res.status(200).send('Message logged');
    } catch (err) {
        console.error('Error during Redis operation:', err);
        res.status(500).send('Server error');
    } finally {
        await client.quit();
    }
});



app.get('/home', function (req, res) {

    res.sendFile(__dirname + "/home.html")

});

app.get(/^(.+)$/, function (req, res) {
    console.log("static file request: " + req.params[0]);
    res.sendFile(__dirname + req.params[0]);
});

const server = app.listen(3000, function () {
    console.log("App listening....");
});