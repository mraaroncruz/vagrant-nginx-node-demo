'use strict';
var mongoose = require('mongoose'),
    Message = mongoose.model('Message'),
    os = require('os');

exports.messages = function(req, res) {
  return Message.find(function (err, messages) {
    if (!err) {
      return res.json(messages);
    } else {
      return res.send(err);
    }
  });
};

exports.createMessage = function (req, res) {
  console.log(req.body);
  var message = req.body.message,
      body = message.body,
      host = message.host,
      createdAt = new Date();

  Message.create({
    body: body,
    host: os.hostname(),
    createdAt: createdAt
  }, function (err, message) {
    if (!err) {
      return res.json(message);
    } else {
      return res.send(err);
    }

  });
};

exports.hostname = function (req, res) {
  return res.json({hostname: os.hostname()});
}
