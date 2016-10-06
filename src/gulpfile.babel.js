'use strict'
const gulp       = require( 'gulp' );
const uglify     = require( 'gulp-uglify' );
const concat     = require( 'gulp-concat' );
const sourcemaps = require( 'gulp-sourcemaps' );
const babel      = require( 'gulp-babel' );
const gutil      = require( 'gulp-util' );
const clean = require( 'gulp-clean' );

gulp.task( 'pre-build', function() {
  return gutil.log( 'Gulp is running!' );
});

gulp.task( 'build', ['pre-build', 'clean'], function() {
  gulp.src( ['!js/lib/*.js', 'js/**/*.js'] )
		.pipe( sourcemaps.init() )
		.pipe( babel( {
		presets: ['es2015']
		} ) )
		.pipe( uglify() )
		.pipe( concat( 'build.js' ) )
		.pipe(sourcemaps.write('.', { sourceRoot: '.' }))
		.pipe( gulp.dest( 'js/build' ) )
});

gulp.task( 'clean', function(){
	gutil.log( 'Started Cleaning old build' );
	return gulp.src( 'js/build/build.js', {read:false} )
				.pipe( clean() );
} );