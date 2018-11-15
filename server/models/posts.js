const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let postsSchema = new Schema({
  userId: String,
  title: String,
  body: String,
});

module.exports = mongoose.model('Posts', postsSchema);