const express = require('express');

const PostModel = require('../models/posts');

let router = express.Router();

router.get('/', (req, res, next) => {
  PostModel.find({}, (err, posts) => {
    if(err) {
      return next(err);
    }
    res.json(posts);
  });
});

module.exports = router;