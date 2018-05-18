require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');

const port = process.env.PORT;

app.use(express.static(__dirname + '/build'));

server.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
})