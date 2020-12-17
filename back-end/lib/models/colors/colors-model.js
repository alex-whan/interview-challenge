'use strict';

const schema = require('./colors-schema');
const DataModel = require('../mongo');

class Color extends DataModel {}

module.exports = new Color(schema);
