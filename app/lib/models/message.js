'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var MessageSchema = new Schema({
  body: String,
  host: String,
  createdAt: Date
});

mongoose.model('Message', MessageSchema);
