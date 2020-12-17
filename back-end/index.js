'use strict';

const server = require('./lib/server.js');
const colorData = require('../src/data/colors');
const ColorModel = require('./lib/models/colors/colors-model');
require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
// mongoose.connect('mongodb://localhost:27017/colors', mongooseOptions);

// COLOR SCRIPT
// Script will add colors from offline dataset to MongoDB on server startup
colorData.colors.map(async color => {
  try {
    await ColorModel.create(color);
  } catch (e) {
    console.log('ERROR', e);
  }
});

// Starts up server on app start
server.start(process.env.PORT);
