var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');

var paths = {};

paths.sources = ['src/**/*.js'];

gulp.task('build', function () {
	var dest = path.join(__dirname, 'dist');

	gulp.src(paths.sources)
		.pipe(jshint())
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(concat('angular-emoji.min.js'))
		.pipe(gulp.dest(dest));
});

gulp.task('default', ['build']);