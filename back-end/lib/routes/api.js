'use strict';

const express = require('express');
const router = express.Router();
const color = require('../models/colors/colors-model');

// ROUTES
// router.post('/api/v1/:model', handlePost);
router.get('/colors', handleGetColors);

async function handleGetColors(req, res, next) {
  let colorsToGet = await color.get();
  res.status(200).json(colorsToGet);
  console.log('GET COLORS FUNCTION RESPONSE', colorsToGet);
}

module.exports = router;
