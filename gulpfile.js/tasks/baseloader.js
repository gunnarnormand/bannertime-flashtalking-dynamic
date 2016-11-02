'use strict';

var config = require('../config');
var data = require('gulp-data');
var fs = require('fs');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var path = require('path');
var render = require('gulp-nunjucks-render');
var zip = require('gulp-zip');

gulp.task('baseloader', function() {
  function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
  }
  function getData(folder) {
    var patt = new RegExp(/([0-9]*)x([0-9]*)/g);
    var match = patt.exec(folder);
    var width = (match === null) ? '' : match[1];
    var height = (match === null) ? '' : match[2];
    return {
      bannerName: folder,
      bannerWidth: width,
      bannerHeight: height
    };
  }
  var folders = getFolders(config.root.dest);
  var tasks = folders.map(function(folder) {
    if (folder != 'base' && folder != 'baseloader') {
      return gulp.src('./src/baseloader/*')
        .pipe(data(getData(folder)))
        .pipe(render({
          path: ['./src/baseloader/*'],
          inheritExtension: true
        }))
        .pipe(zip(folder + '-base.zip'))
        .pipe(gulp.dest(config.tasks.baseloader.dest));
    }
  });
  return tasks;
});
