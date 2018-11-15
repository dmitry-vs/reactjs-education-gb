const express = require('express')

const UsersModel = require('../models/users');

let router = express.Router();

router.get('/', (req, res, next) => {
  UsersModel.find({})
  .then(users => res.json(users))
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  UsersModel.find({_id: req.params.id})
  .then(users => res.json(users))
  .catch(err => next(err));
});

module.exports = router;