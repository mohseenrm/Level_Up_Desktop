/**
 * Player Class File
 * Author: Mohseen Mukaddam
 */
//Profile -> (Player, Guild, Skill, Task) Objects
//Player -> (health, exp, level)
//https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.bjpp8kl4b
//https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
//CommonJS
/**
 * Player class will only handle attributes realted to the player object
 * i.e health, exp, level
 */
var Result = (function() {
	//Player Class definition
	var Player = function(health, exp, level){
		this.health = health;
		this.exp = exp;
		this.level = level;

		console.log("Player created");
	}
	Player.prototype = {
		constructor: Player,
		set_health:function(health){
			this.health = health;
		},
		set_exp:function(exp) {
			this.exp = exp;
		},
		set_level:function(level) {
			this.level = level;
		},
		do_level_up:function(level) {
			//override to check whether to level up or not
			//return Boolean
		},
		increase_exp:function() {
			//override to define manner of increasing experience
		},
		decrease_health:function () {
			//override to define manner to decrease health
		}
	}
	return{
		Player: Player
	};
})()