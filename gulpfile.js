var gulp = require('gulp');
var pug = require('gulp-pug');
var uglifycss = require('gulp-uglifycss');
var uglifyjs = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('buildHTML', function () {
  gulp.src('src/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/templates'))
});

gulp.task('uglifycss', function() {
  gulp.src('src/stylesheets/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('dist/stylesheets'))
});

gulp.task('uglifyjs', function() {
  gulp.src('src/javascripts/*/*.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest('dist/javascripts/*'))
});

gulp.task('jshint', function () {
  gulp.src('src/javascripts/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default',['buildHTML']);
