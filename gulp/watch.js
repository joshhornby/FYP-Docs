'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('index.md', ['docs']);
});
