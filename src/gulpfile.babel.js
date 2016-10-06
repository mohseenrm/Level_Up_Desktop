'use strict'
const gulp       = require( 'gulp' );
const uglify     = require( 'gulp-uglify' );
const concat     = require( 'gulp-concat' );
const sourcemaps = require( 'gulp-sourcemaps' );
const babel      = require( 'gulp-babel' );
const gutil      = require( 'gulp-util' );
const clean      = require( 'gulp-clean' );

const sass       = require( 'gulp-sass' );
const minifyCSS  = require( 'gulp-minify-css' );

const bump       = require( 'gulp-bump' );

gulp.task( 'bump', function(){
	gulp.src( './*.json' )
		.pipe( bump( {type:'minor'} ) )
		.pipe( gulp.dest( './' ) );
});

gulp.task( 'bump-major', function(){
	gulp.src( './*.json' )
		.pipe( bump( {type:'major'} ) )
		.pipe( gulp.dest( './' ) );
});

gulp.task( 'bump-patch', function(){
	gulp.src( './*.json' )
		.pipe( bump( {type:'patch'} ) )
		.pipe( gulp.dest( './' ) );
});

gulp.task( 'sass', function() {
    gulp.src( 'scss/*.scss' )
        .pipe( sourcemaps.init() )
	    .pipe( sass().on( 'error', sass.logError ) )
	    .pipe( sourcemaps.write() )
	    .pipe( gulp.dest( 'css/') );
});

gulp.task( 'minify-css', function(){
	return gulp.src( 'css/*.css' )
				.pipe( minifyCSS() )
				.pipe( concat( 'styles' ) )
				.pipe( gulp.dest( 'build' ) )
});

gulp.task( 'pre-build', function() {
	return gutil.log( 'Gulp is running!' );
});

gulp.task( 'build', ['pre-build', 'clean-js', 'bump'], function() {
	gulp.src( ['!js/lib/*.js', 'js/**/*.js'] )
		.pipe( sourcemaps.init() )
		.pipe( babel( {
		presets: ['es2015']
		} ) )
		.pipe( uglify() )
		.pipe( concat( 'build.js' ) )
		.pipe( sourcemaps.write('.', { sourceRoot: '.' } ) )
		.pipe( gulp.dest( 'js/build' ) )
});

gulp.task( 'clean-js', function(){
	gutil.log( 'Started Cleaning old build' );
	return gulp.src( 'js/build/build.js', {read:false} )
				.pipe( clean() );
} );