"use strict";

var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var jshint = require('gulp-jshint');
//var stylish = require('jshint-stylish'); //Optional
var summary = require('jshint-summary');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
var gulpPrint = require('gulp-print');
var gulpIf = require('gulp-if');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var fixmyjs = require("gulp-fixmyjs");
var plumber = require('gulp-plumber');
var inject = require('gulp-inject');

gulp.task('vet', function() {
  log('Analyzing source with JSHint and JSCS');

  return gulp
    .src(config.allJs)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(summary))
    .pipe(jshint.reporter('fail'));
});

gulp.task('fix', function() {
  log('Fixing');
  return gulp
    .src(config.allJs)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(fixmyjs())
    .pipe(gulp.dest("./dist"));
});

gulp.task('styles', ['clean-styles'], function() {
  log('Compiling Less --> CSS');
  return gulp
    .src(config.less)
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({browers: ['last 2 version', '> 5%']}))
    .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function(done) {
  var files = config.temp + '**/*.css';
  clean(files, done);
});

gulp.task('less-watcher', function() {
  gulp.watch([config.less], ['styles']);
});

gulp.task('wiredep', function() {
  var options = config.getWiredepDefaultOptions; // TODO
  var wiredep = require('wiredep').stream;
  return gulp
    .src(config.index) // TODO index
    .pipe(wiredep(options))
    .pipe(inject(gulp.src(config.js))) // TODO js ?
    .pipe(gulp.dest(config.client)); // TODO config ?
});

function clean(path, done) {
  log('Cleaning: ' + util.colors.red(path));
  del(path, done);
}

function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        util.log(util.colors.green(msg[item]));
      }
    }
  } else {
    util.log(util.colors.yellow(msg));
  }
}
