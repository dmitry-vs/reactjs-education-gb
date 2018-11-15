const express = require('express')

const UsersModel = require('../models/users');

let router = express.Router();

router.get('/', (req, res, next) => {
  UsersModel.find({})
  .then(users => res.json(users))
  .catch(err => next(err));
});

module.exports = router;