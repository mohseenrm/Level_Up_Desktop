/**
 * Update class file
 * Author: Mohseen Mukaddam`
 */
'use strict';

let Update = function( params ){
	this._max             = params.max || 0;
	this._current         = params.current || 0;
	this._level           = params.level || 0;
	this._update_function = params.update_function || "No function provided";
	console.log("Update object created");
};

Update.prototype = {
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
	}
};
// export { Update };
module.exports = Update;