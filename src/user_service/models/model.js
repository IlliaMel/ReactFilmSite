const mongoose = require('mongoose');

const schema = require('./schema');

const model = mongoose.model(
    'UserModel',
    schema
);

module.exports = model;
