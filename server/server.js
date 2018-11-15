const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const morgan = require('morgan');

const RoutePosts = require('./routes/posts');

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});

const app = express();
app.set('view engine', 'html');

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(morgan('combined'));

app.use('/api/posts', RoutePosts);
// ... more routes here

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// error handling
app.use((req, res, next) => {
  let error = new Error('Page not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error,
  });
});

app.listen(3000);