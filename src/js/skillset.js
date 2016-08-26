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
		set_IQ:function (IQ){
			this._IQ = IQ;
		},
		set_Strength:function (Strength) {
			this._Strenght = Strength;
		},
		set_Creativity:function (Creativity) {
			this._Creativity = Creativity;
		},
		set_Endurance:function (Endurance) {
			this._Endurance = Endurance;
		},
		set_Charisma:function (Charisma) {
			this._Charisma = Charisma;
		},
		get_IQ:function () {
			return(this._IQ);
		},
		get_Strength:function () {
			return(this._Strenght);
		},
		get_Endurance:function () {
			return(this._Endurance);
		},
		get_Charisma:function () {
			return(this._Charisma);
		},
		get_Creativity:function () {
			return(this._Creativity);
		}
	}
	return{
		Skillset: Skillset
	};
})();