const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usersSchema = new Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String,
},
{
  versionKey: false,
});

module.exports = mongoose.model('Users', usersSchema);