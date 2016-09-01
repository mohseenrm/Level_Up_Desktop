/**
 * Task Class File
 * Author: Mohseen Mukaddam
 */
//Action plan -> create all basic classes and init profile
//(damage will have a base value and that would be updated (i.e reduced as the user levels up))
//so in effect, there needs to be a level up function modifying these base values
//Also TaskTracker -> Task[] and stats related to it
var LEVEL_UP = LEVEL_UP || {};

LEVEL_UP.TASK = (function () {
	//class definition and constructor
	var Task = function (desc, gain, damage) {
		this.description = "";
		this._baseGain = gain;
		this._baseDamage = damage;
	}

	Task.prototype = {
		constructor: Task,
		_clean_attr: function (attr) {
			return(attr.replace("_", "").toLowerCase());
		},
		_valid_attr: function () {
			//process attribute, remove underscore if it exists and turn case to lower and compare
			attr = this._clean_attr(attr);
			if(attr === "description" || attr === "basegain" || attr === "basedamage")
				return(true);
			return(false);
		},
		get_attr: function (attr) {
			if(this._valid_attr(attr)){
				//assuming correct attribute name
				return(this.attr);
			}
			else{
				return("Invalid attribute");
				console.log("ERROR: " + "Invalid attribute " + attr);
			}
		}
	};
})();