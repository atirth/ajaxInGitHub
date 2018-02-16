/*var gulp = require('gulp'),
babel = require('gulp-babel'),
minify = require('gulp-babel-minify'),
concat = require('gulp-concat');

//transpile task

gulp.task('transpile', function(){
  return gulp.src(['input/*.js'])
	.pipe(babel())	
	.pipe(gulp.dest('ES5output'));
});

gulp.task('compress', function() {
  return gulp.src('ES5output/*.js')
    .pipe(minify())
    .pipe(gulp.dest('output'))
});

gulp.task('concatin', function() {
  return gulp.src(['output/*.js'])
    .pipe(concat('combined.js'))
    .pipe(gulp.dest('outputconcatfinal'));
});
gulp.task('default',gulp.series('transpile','compress','concatin')); */
var gulp =require('gulp');
var criticalcss = require('gulp-critical-css');

gulp.task('default',function(){
	return gulp.src('css/main.css')
	.pipe(criticalcss())
	.pipe(gulp.dest('critical'));
});