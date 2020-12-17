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

// Script will add colors from offline dataset to MongoDB on server startup
// Need to make sure they don't get saved more than once - check for dupes
colorData.colors.map(async color => {
  try {
    let newColor = await ColorModel.create(color);
    console.log('COLOR:', newColor);
  } catch (error) {
    console.log('ERROR', error);
  }
});

server.start(process.env.PORT);
