/**
 * sample classes CoI
 * Author: Mohseen Mukaddam
 */
'use strict';

var sample1 = function() {};

sample1.prototype.do_something = function() {
	console.log( "this is the first sample doing something" );
};

var sample2 = function() {};

sample2.prototype.do_something = function() {
	console.log( "this is the second sample doing something" );
};
export{
	sample1 as first_module,
	sample2 as second_module
};