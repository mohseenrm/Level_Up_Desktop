'use strict'
var gulp = require( 'gulp' );
var uglify = require( 'gulp-uglify' );
var concat = require( 'gulp-concat' );
var sourcemaps = require( 'gulp-sourcemaps' );
var babel = require( 'gulp-babel' );
// import gulp from 'gulp';
// import uglify from 'gulp-uglify';
// import concat 

gulp.task( 'default', function() {
  gulp.src( 'js/**/*.js' )
		.pipe( sourcemaps.init() )
		.pipe( babel( {
		presets: ['es2015']
		} ) )
		.pipe( concat( 'build.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'js/build' ) )
});