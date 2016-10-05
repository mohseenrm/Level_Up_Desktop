'use strict';
/**
 * Profile Class file
 * Author: Mohseen Mukaddam
 * @param {[Object]} Player [Player object required to create profile]
 * @param {[Object]} Skillset [Skillset object required to create profile]
 */
let Profile = function(params){
	this.Player   = params.player || "Player not defined";
	this.Skillset = params.skillset || "Skillset not defined";
	this.Update   = params.update || "Updated not defined";
	this.Tasks    = params.tasks || "No List of task objects provided";

	console.log( "Profile created| Player: " + this.Player + " | Skillset: " + this.Skillset + " | Update: " + this.Update + " | Task List: " + this.Task );
};

Profile.prototype = {
	constructor: Profile,
	get_attr: function () {
		return{
			player   : this.Player,
			skillset : this.Skillset,
			update   : this.Update,
			tasks    : this.Tasks
		}
	},
	set_attr: function( params ) {
		this.Player   = params.player || this.Player;
		this.Skillset = params.skillset || this.Skillset;
		this.Update   = params.update || this.Update;
		this.Task     = params.tasks || this.Tasks;
		console.log( "Profile created| Player: " + this.Player + " | Skillset: " + this.Skillset + " | Update: " + this.Update + " | Task List: " + this.Task );
	}
};
export = { Profile };