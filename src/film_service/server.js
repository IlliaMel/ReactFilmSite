const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const server = express();
const controller = require('./controllers/controller')

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
        extended: false
}));

server.use('/films', controller)

mongoose.connect('',
    {useNewUrlParser: true,
            useUnifiedTopology: true});
mongoose.set('strictQuery', true)

server.listen(3001 , () =>
    console.log("Server is running @3001 ...")
);