'use strict'
var uglify = require( 'gulp-uglify' );
var concat = require( 'gulp-concat' );
var sourcemaps = require( 'gulp-sourcemaps' );
var babel = require( 'gulp-babel' );

gulp.task( 'build', function() {
  gulp.src( 'js/**/*.js' )
		.pipe( sourcemaps.init() )
		.pipe( babel( {
		presets: ['es2015']
		} ) )
		.pipe( concat( 'build.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'build' ) )
});