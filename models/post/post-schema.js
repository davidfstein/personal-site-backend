const mongoose = require('mongoose');

module.exports = mongoose.Schema({
  title: String,
  body: String,
  created: Date,
  updated: Date,
  author: String
}, {collection: 'post'});