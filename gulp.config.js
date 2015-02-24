"use strict";

module.exports = function() {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var config = {
    temp: './.tmp/',
    /**
     * Files path
     */
    allJs: [
      './src/**/*.js',
      './*.js'
    ],
    index: client + 'index.html',
    js: [
      
    ]
    ,
    less: client + 'styles/styles.less'
  };

  return config;
};
