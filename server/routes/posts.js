const express = require('express');

const PostModel = require('../models/posts');

let router = express.Router();

router.get('/', (req, res, next) => {
  PostModel.find({})
  .then(posts => res.json(posts))
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  PostModel.find({_id: req.params.id})
  .then(post => res.json(post))
  .catch(err => next(err));
});

module.exports = router;