const mongoose = require('mongoose');

const commentsModel = require('./comments');

let Schema = mongoose.Schema;

let postsSchema = new Schema({
  userId: String,
  title: String,
  body: String,
},
{
  versionKey: false,
});

postsSchema.statics.deletePost = async function(postId) {
  try {
    let post = await this.findOneAndRemove({_id: postId});
    if(post) {
      await commentsModel.deleteMany({postId: post._id});
    }
    return post;
  }
  catch(error) {
    throw new Error(error);
  }
}

module.exports = mongoose.model('Posts', postsSchema);