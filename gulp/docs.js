'use strict';

var gulp = require('gulp');

var run = require('gulp-run');

gulp.task('docs', function () {
  run('aglio -i index.md -o index.html').exec()
});
