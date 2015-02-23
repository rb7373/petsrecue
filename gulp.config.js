module.exports = function () {
  var client = './src/client/';
  var config = {
    temp: './.tmp/',

    less: client + 'styles/styles.less',

    /**
     * Files path
     */
    allJs: [
      './src/**/*.js',
      './*.js'
    ],
    distAllJs: [
      './src/**/*.js',
      './*.js'
    ]
  };

  return config;
};
