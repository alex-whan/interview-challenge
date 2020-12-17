'use strict';

const express = require('express');
const router = express.Router();
const color = require('../models/colors/colors-model');

// Routes
// Example:
// router.post('/api/v1/:model', handlePost);
router.get('/colors', getColors);

async function getColors(req, res, next) {
  console.log('GET COLORS FUNCTION');
  // let colorsToGet = await color.get();
  // res.status(200).json(colorsToGet);
}

module.exports = router;
