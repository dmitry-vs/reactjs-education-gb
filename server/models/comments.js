const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commentsSchema = new Schema({
  postId: String,
  name: String,
  email: String,
  body: String,
});

module.exports = mongoose.model('Comments', commentsSchema);