'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('styles', function(){
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles/'))
		.pipe(reload({stream: true}));
});

gulp.task('watch', function(){
	gulp.watch('./dev/styles/**/*.scss', ['styles']);
	gulp.watch('./public/*.html', reload);
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: './public'
	})
});

gulp.task('default', ['browser-sync','styles', 'watch']);



