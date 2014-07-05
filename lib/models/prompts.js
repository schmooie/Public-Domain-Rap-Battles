'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PromptSchema = new Schema({
  book: String,
  passage: String
});

mongoose.model('Prompt', PromptSchema);