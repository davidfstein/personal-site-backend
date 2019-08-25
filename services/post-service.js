module.exports = app => {

    const postModel = require('../models/post/post-model');

    findAllPosts = (_, res) =>
        postModel.findAllPosts()
            .then(posts => {
                res.send(posts);
            });

    createPost = (req, res) => 
        postModel.createPost(req.body)
                 .then(post => res.send(post));

    updatePost = (req, res) =>
        postModel.updatePost(req.body)
            .then(post => res.send(post));

    deletePost = (req, res) => {
        const postId = req.params.postId;
        postModel.deletePost(postId)
        res.send(200);
    }

    findPostById = (req, res) =>
        postModel.findPostById(req.params.postId)
            .then(post => res.send(post));
  
    app.get('/api/post', findAllPosts);
    app.post('/api/post', createPost);
    app.put('/api/post/:postId', updatePost);
    app.delete('/api/post/:postId', deletePost);
    app.get('/api/post/:userId', findPostById);
};