const express = require('express');
const bodyParser = require('body-parser');

const PostModel = require('../models/posts');

let router = express.Router();

router.use(bodyParser.json());

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

router.get('/delete/:id', (req, res, next) => {
  PostModel.deleteOne({_id: req.params.id})
  .then(post => res.json(post))
  .catch(err => next(err));
});

router.post('/insert', (req, res, next) => {
  PostModel.create(req.body)
  .then(post => res.json(post))
  .catch(err => next(err));
});

module.exports = router;