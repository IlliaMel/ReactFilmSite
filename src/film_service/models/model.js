const mongoose = require('mongoose');

const schema = require('./schema');

const model = mongoose.model(
    'FilmModel',
    schema
);

module.exports = model;
