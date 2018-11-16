const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let postsSchema = new Schema({
  userId: String,
  title: String,
  body: String,
},
{
  versionKey: false,
});

postsSchema.statics.deletePost = function(postId) {
  return new Promise((resolve, reject) => {
    this.findOneAndRemove({_id: postId})
    .then(post => resolve(post))
    .catch(err => reject(err));
  });  
}

module.exports = mongoose.model('Posts', postsSchema);