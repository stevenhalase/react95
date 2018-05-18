require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');

const port = process.env.PORT;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/storybook/index.html'));
});

app.get('/storybook', function(req, res) {
    res.sendFile(path.join(__dirname + '/storybook/index.html'));
});

app.use(express.static(__dirname + '/storybook'));

server.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
})