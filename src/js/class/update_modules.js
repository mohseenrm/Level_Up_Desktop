/**
 * Update modules file
 * This file contains all the modules that can be used inside the updated class
 * Author: Mohseen Mukaddam
 */
'use strict';
/**
 * this function will return base points depending on the level
 * @param  {[int]} level [this would be the current level]
 * @return {[int]}       [max exp points for current level]
 */
let get_base_points = function( level ){
	level = level || 0;
	//returns the base points based on current level
	//init base points based on current level
	//so for 1-15: 2,700; 16-45: 100,000; 46-75: 500,000; 76-100: 800,000;
	//2-15
	if( level > 1 && level < 16 )
		return( 2700 + ( 10 * level ) );
	//16-45
	else if( level > 15 && level < 46 )
		return( 100000 + ( 25 * level ) );
	//46-85
	else if( level > 45 && level < 86 )
		return( 300000 + ( 55 * level ) );
	//85-100
	else if( level > 85 && level < 101 )
		return( 800000 + ( 75 * level ) );
	else{
		console.log( "Need to check the level condition here" );
		return( -1 );
	}
};
/**
 * function that will calculate max points based on learning rate and base points for current level
 * @param  {[int]} base_points [base points of current level]
 * @param  {[string]} rate [learning rate]
 * @return {[int]}        [max points for a level]
 */
let get_max_points = function( params ){
	let base_points   = params.base_points || 0;
	let learning_rate = params.rate || 'normal';
	let factor        = 1;

	if( base_points === 0 ){
		console.log( 'Error: No valid base points were provided' );
		return( -1 );
	}
	switch( learning_rate ){
	case 'fast': factor = 0.8; break;
	case 'slow': factor = 1.2; break;
	default: factor     = 1;
	};

	return( factor * Math.pow( base_points, 3 ) )
}
/**
 * this function will take current level and exp such that the newly added exp is > base_points for that level and so level up is required
 * @param  {[int]} max [max for that level]
 * @param  {[int]} level [current level]
 * @param  {[int]} current_exp [current exp points]
 * @param  {[int]} exp [exp to be added to the current level]
 * @param  {[string]} rate [learning rate]
 * @return {
 *         max: [int],
 *         level: [int],
 *         exp: [int]
 * }
 * returns the new level and the exp that needs to be set and new level max exp points
 */
let level_update = function( params ){
	let max           = params.max || 0;
	let level         = params.level || 0;
	let exp           = params.exp || 0;
	let current_exp   = params.current_exp || 0;
	let learning_rate = params.rate || 'normal';

	let return_object = new Object();

	//cap the level at 100
	
	let base_points   = get_base_points( level );

	let upper_bound   = get_max_points({
		base_points : base_points,
		rate        : learning_rate
	});

	level += 1;

	return_object.max   = get_base_points( level );
	//level legal value 1-100
	return_object.level = level;
	//this always should be greater than or equal to 0, this calculates the overflow to the next level
	return_object.exp   = ( current_exp + exp ) - upper_bound;
	//new max
	return( return_object );
};
export{
	get_base_points,
	get_max_points,
	level_update
};