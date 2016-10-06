/**
*	SkillsetMatric class definition
*	-> for generating the matrix object in game
*/
// constructor
var SkillsetMatrix = function(skillsetObj){
	var _matrix = {
		iq: skillsetObj.get_attr("iq"),
		strength: skillsetObj.get_attr("strength"),
		endurance: skillsetObj.get_attr("endurance"),
		charisma: skillsetObj.get_attr("charisma"),
		creativity: skillsetObj.get_attr("creativity")
	};
}
SkillsetMatrix.prototype = {
	constructor: SkillsetMatrix,
	get_matrix: function() {
		return(this._matrix);
	},
	//format Cre Cha End Str IQ
	set_matrix: function(Cre, Cha, End, Str, IQ) {
		this._matrix = {
			creativity: Cre,
			charisma: Cha,
			endurance: End,
			strength: Str,
			iq: IQ
		}
	},
	set_matrix: function(skillsetObj) {
		this._matrix = {
			creativity: skillsetObj.get_attr("creativity"),
			charisma: skillsetObj.get_attr("charisma"),
			endurance: skillsetObj.get_attr("endurance"),
			strength: skillsetObj.get_attr("strength"),
			iq: skillsetObj.get_IQ()
		}
	}
};
module.exports = SkillsetMatrix;