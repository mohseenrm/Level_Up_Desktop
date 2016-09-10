/**
 * CoI Player Class
 * Author: Mohseen Mukaddam
 */

var Player = function (params) {
	//constructor
	this._health = params.health || 0;
	this._exp = params.exp || 0;
	this._level = params.level || 0;
	console.log("new player with level: "+ this._level +" created!");
}

Player.prototype = {
	constructor: Player,
	set_attr: function (params) {
		this._health = params.health || this._health;
		this._exp = params.exp || this._exp;
		this._level = params.level || this._level;
	},
	get_attr: function () {
		return{
			health: this._health,
			exp: this._exp,
			level: this._level
		}
	}
};
module.exports = Player;