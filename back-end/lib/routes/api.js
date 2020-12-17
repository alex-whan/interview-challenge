'use strict';

const express = require('express');
const router = express.Router();
const colors = require('../models/colors/colors-model');

// ROUTES
router.get('/colors', handleGetColors);

async function handleGetColors(req, res, next) {
  let colorsToGet = await colors.get();
  res.status(200).json(colorsToGet);
}

module.exports = router;
