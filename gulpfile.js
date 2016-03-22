/*
 * Minio, Inc. website (C) 2015-2016 Minio, Inc.
 *
 * All Rights Reserved.
 */

var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('cssmin', function () {
    gulp.src('css/main.less')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

gulp.task('less', function() {
    return gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('less/**/*.less', ['cssmin', 'less']);
});

gulp.task('default', ['watch']);