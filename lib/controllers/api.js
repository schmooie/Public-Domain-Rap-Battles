'use strict';

var mongoose = require('mongoose'),
    Prompt = mongoose.model('Prompt');

/**
 * Get random prompt
 */
exports.randomPrompt = function(req, res) {
  return Prompt.findOne({rand:{$near: [Math.random(), 0]}},function (err, prompt) {
    if (!err) {
      return res.json(prompt);
    } else {
      return res.send(err);
    }
  });
};