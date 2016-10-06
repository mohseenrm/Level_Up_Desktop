/**
* Profile Class file
* Author: Mohseen Mukaddam
* this class contains all attributes related to a Level Up player
*/
/**
 * Profile class definition and constructor
 */
var Profile = function (Player, Skillset, Task) {
	this.Player = Player;
	this.Skillset = Skillset;
	this.Task = Task;
	console.log("Profile has been created");
}
module.exports = Profile;