'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  Message = mongoose.model('Message');

/**
 * Populate database with sample application data
 */

Message.find({}).remove();
