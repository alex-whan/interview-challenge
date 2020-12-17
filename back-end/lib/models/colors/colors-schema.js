'use strict';

const mongoose = require('mongoose');

const color = mongoose.Schema({
  hex: { type: String, default: '#ffffff', required: true },
});

module.exports = mongoose.model('color', color);
