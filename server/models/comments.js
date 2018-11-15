const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commentsSchema = new Schema({
  postId: Number,
  name: String,
  email: String,
  body: String,
});

module.exports = mongoose.model('Comments', commentsSchema);