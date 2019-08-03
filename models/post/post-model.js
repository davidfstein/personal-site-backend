const mongoose = require('mongoose');
const postSchema = require('./post-schema');

const postModel = mongoose.model('PostModel', postSchema);

findAllPosts = () =>
    postModel.find({});

findPostById = postId => 
    postModel.findById(postId);

createPost = (post) =>
    postModel.create(post);

updatePost = (post, date) =>
    postModel.update({
        _id: post._id
    }, {
        title: post.title,
        body: post.body,
        updated: date
    });

deletePost = (postId) =>
    postModel.remove({_id: new mongoose.ObjectId(postId)});

module.exports = {
  findAllPosts,
  findPostById,
  createPost,
  updatePost,
  deletePost,
};