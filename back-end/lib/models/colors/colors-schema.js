'use strict';

const mongoose = require('mongoose');

const color = mongoose.Schema({
  code: {
    type: String,
    default: '#ffffff',
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('color', color);
