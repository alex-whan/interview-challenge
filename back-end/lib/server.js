'use strict';

const express = require('express');
const app = express();
app.use(cors());
require('dotenv').config();
const cors = require('cors');
const router = require('../lib/routes/api');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');

// GLOBAL MIDDLEWARE
app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(router);

// ERRORS
app.use('*', error404);
app.use(error500);

// Exports a start method - server will not start automatically
module.exports = {
  server: app,
  start: port => {
    const PORT = port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  },
};
