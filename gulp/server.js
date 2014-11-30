'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;


  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir
    },
    browser: browser
  });

}

gulp.task('serve', ['watch'], function () {

    browserSync({
        server: {
            baseDir: "./"
        }
    });

});

