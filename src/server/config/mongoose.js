var mongoose = require('mongoose');
var userModel = require('../models/userModel');
var languageModel = require('../models/languageModel');

module.exports = function (config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('FiX db opened');
  });

  userModel.createDefaultUsers();
  languageModel.createDefaultLanguages();
};
