/**
 * CoI Skillset Class
 * Author: Mohseen Mukaddam
 */
//update class -> (slow, normal, fast) -> (some value) for levels
//take the current value, max value, and update function
'use strict';
var Skillset = function ( params ) {
	this._iq         = params.iq || 0;
	this._creativity = params.creativity || 0;
	this._charisma   = params.charisma || 0;
	this._strength   = params.strength || 0;
	this._endurance  = params.endurance || 0;
	console.table( "Skillset created | IQ: " + this._iq + "| Creativity: " + this._creativity + "| Charisma: " + this._charisma + "| Strength: " + this._strength + "| Endurance: " + this._endurance  );
};
Skillset.prototype = {
	constructor: Skillset,
	get_attr: function(){
		return{
			iq         : this._iq,
			creativity : this._creativity,
			charisma   : this._charisma,
			strength   : this._charisma,
			endurance  : this._endurance
		};
	},
	set_attr: function( params ){
		this._iq         = params.iq || this._iq;
		this._creativity = params.creativity || this._creativity;
		this._charisma   = params.charisma || this._charisma;
		this._strength   = params.strength || this._strength;
		this._endurance  = params.endurance || this._endurance;
		console.table( "Skillset Updated | IQ: " + this._iq + "| Creativity: " + this._creativity + "| Charisma: " + this._charisma + "| Strength: " + this._strength + "| Endurance: " + this._endurance  );
	}
};
module.exports = Skillset;