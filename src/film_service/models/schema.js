const mongoose = require('mongoose');

const schema = mongoose.Schema({
   title: String,
   genre: String,
   author: String,
   img: String,
});
module.exports = schema;
