/**
 * Update class file
 * Author: Mohseen Mukaddam
 * this class is dependent on update_modules for functionality
 */
'use strict';
/**
 * This object will handle the update related functionalitiy
 * @param {[int]} max [current level maximum upper bound]
 * @param {[int]} current [current exp points]
 * @param {[level]} level [current level]
 * @param {[level]} update function [update function module]
 */
let Update = function( params ){
	this._max             = params.max || 0;
	this._current         = params.current || 0;
	this._level           = params.level || 0;
	this._update_function = params.update_function || "No function provided";
	console.log( "Update object created | max:" + this._max + "| current: " + this._current + "| Level: " + this._level + "| Update Function: " + this._update_function );
};

Update.prototype = {
	constructor: Update,
	get_attr: function(){
		return{
			//these are the parameter that will go in the update function
			max             : this._max,
			current         : this._current,
			level           : this._level,
			update_function : this._update_function
		};
	},
	set_attr: function( params ){
		this._max             = params.max || this._max;
		this._current         = params.current || this._current;
		this._update_function = params.update_function || this._update_function;
	},
	/**
	 * level up will call the update module 
	 * @param  {[type]} params [description]
	 * @return {[type]}        [description]
	 */
	level_up: function( params ) {
		if( this._max === undefined || this._current === undefined || this._level === undefined || this._update_function === undefined || params.exp === undefined || params.rate === undefined ){
			console.log( "Error: Cannot level up! provide parameters to the update object" );
			return( -1 );
		}
		return( this._update_function({
			max         : this._max,
			level       : this._level,
			current_exp : this._current,
			exp         : params.exp || 0,
			rate        : params.rate || 'normal'
		}) );
	}
};
export { Update };
//module.exports = Update;