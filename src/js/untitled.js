/**
 * Skill Class File
 * Author: Mohseen Mukaddam
 */
//Profile -> (Player, Guild, Skill, Task) Objects
//Player -> (health, exp, level)
/**
 * Player class will only handle attributes realted to the player object
 * i.e health, exp, level
 */
//Global module
var LEVEL_UP = LEVEL_UP || {};
LEVEL_UP.SKILLSET = (function () {
	//Skillset Class definition
	var Skillset = function(IQ, Strength, Creativity, Endurance, Charisma){
		this._IQ = IQ;
		this._Strenght = Strength;
		this._Creativity = Creativity;
		this._Endurance = Endurance;
		this._Charisma = Charisma;
		console.log("Skillset Object created");
	}
	Skillset.prototype = {
		constructor: Skillset,
		_set_IQ:function (IQ){
			this._IQ = IQ;
		},
		_set_Strength:function (Strength) {
			 /* body... */ 
		}
	}
	return{
		Skillset: Skillset
	};
})();