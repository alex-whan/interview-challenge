'use strict';

const server = require('./lib/server.js');
require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

// mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
mongoose.connect('mongodb://localhost:27017/colors', mongooseOptions);

server.start(process.env.PORT);
