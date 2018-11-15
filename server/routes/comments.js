const express = require('express')

const CommentsModel = require('../models/comments');

let router = express.Router();

router.get('/', (req, res, next) => {
  CommentsModel.find({})
  .then(comments => res.json(comments))
  .catch(err => next(err));
});

module.exports = router;