/**
 * Skill Class File
 * Author: Mohseen Mukaddam
 */
//Profile -> (Player, Guild, Skill, Task, SkillsetMatrix) Objects
//Player -> (health, exp, level)
/**
 * Player class will only handle attributes realted to the player object
 * i.e health, exp, level
 */
//Skillset Class definition
var Skillset = function(IQ, Strength, Creativity, Endurance, Charisma){
	this._iq = IQ;
	this._strength = Strength;
	this._creativity = Creativity;
	this._endurance = Endurance;
	this._charisma = Charisma;
	console.log("Skillset Object created");
}
Skillset.prototype = {
	constructor: Skillset,
	_valid_attr: function (attr) {
		//process attribute, remove underscore if it exists and turn case to lower and compare
		attr = this._clean_attr(attr);
		if(attr === "creativity" || attr === "charisma" || attr === "endurance" || attr === "strength" || attr === "iq")
			return(true);
		return(false);
	},
	_clean_attr: function (attr) {
		//return attribute without underscore and to lower case
		return(attr.replace("_", "").toLowerCase());
	},
	get_attr: function (attr) {
		if (this._valid_attr(attr) === true){
			attr = "_" + attr;
			return(this.attr);
		}
		else{
			return("Invalid attribute");
			console.log("ERROR: " + "Invalid attribute " + attr);
		}
	},
	set_attr: function(attr, value){
		attr = this._clean_attr(attr);
		if(this._valid_attr(attr) === true){
			attr = "_" + attr;
			this.attr = value;
		}
		else
			console.log("error in setting attribute " + attr);
	}
};
module.exports = Skillset;