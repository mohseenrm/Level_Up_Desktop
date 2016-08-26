/**
 * Player Class File
 * Author: Mohseen Mukaddam
 */
//Profile -> (Player, Guild, Skill, Task) Objects
//Player -> (health, exp, level)
//https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.bjpp8kl4b
//https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
/**
 * Player class will only handle attributes realted to the player object
 * i.e health, exp, level
 */
//Global module
var LEVEL_UP = LEVEL_UP || {};
LEVEL_UP.PLAYER = (function () {
	//Player Class definition
	var Player = function(health, exp, level){
		this._health = health;
		this._exp = exp;
		this._level = level;

		console.log("Player created");
	}
	Player.prototype = {
		constructor: Player,
		set_health:function (health){
			this._health = health;
		},
		set_exp:function (exp) {
			this._exp = exp;
		},
		set_level:function (level) {
			this._level = level;
		},
		get_health:function () {
			return(this._health);
		},
		get_exp:function () {
			return(this._exp); 
		},
		get_level:function () {
			return(this._level);
		}
		_do_level_up:function (level) {
			//override to check whether to level up or not
			//return Boolean
		},
		_increase_exp:function () {
			//override to define manner of increasing experience
		},
		_decrease_health:function () {
			//override to define manner to decrease health
		},
		_do_decrease_health:function () {
			//override to check whether to decrease health
		}
	}
	return{
		Player: Player
	};
})();