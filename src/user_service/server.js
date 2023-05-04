const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
    extended: false
}));

const controller = require('./controllers/controller')
server.use('/authorization', controller)


mongoose.connect('',
    {useNewUrlParser: true,
        useUnifiedTopology: true});

mongoose.set('strictQuery', true)

server.listen(3002 , () =>
    console.log("Server is running @3002 ...")
);