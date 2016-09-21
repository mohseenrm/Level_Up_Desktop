/**
 * Update modules file
 * This file contains all the modules that can be used inside the updated class
 * Author: Mohseen Mukaddam
 */
'use strict';
/**
 * this function will take current level and exp such that the newly added exp is > base_points for that level and so level up is required
 * @param  {[int]} max [max for that level]
 * @param  {[int]} level [current level]
 * @param  {[int]} current_exp [current exp points]
 * @param  {[int]} exp [exp to be added to the current level]
 * @return {
 *         max: [int],
 *         level: [int],
 *         exp: [int]
 * }
 * returns the new level and the exp that needs to be set and new level max exp points
 */
let level_update = function( params ){
	let max = params.max || 0;
	let level = params.level || 0;
	let exp = params.exp || 0;
	let current_exp = params.current_exp || 0;

	let return_object = new Object();

	//cap the level at 100
	
	let base_points = get_base_points( level );
	upper_bound = Math.pow( base_points, 3 );

	level += 1;
	return_object.max = get_base_points( level );
	//level legal value 1-100
	return_object.level = level;
	//this always should be greater than or equal to 0, this calculates the overflow to the next level
	return_object.exp = ( current_exp + exp ) - base_points; 
	//new max

	return( return_object );
};

/**
 * this function will return base points depending on the level
 * @param  {[int]} level [this would be the current level]
 * @return {[int]}       [max exp points for current level]
 */
let get_base_points = function( level ){
	let level = level || 0;
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
export{
	get_base_points,
	level_update
};