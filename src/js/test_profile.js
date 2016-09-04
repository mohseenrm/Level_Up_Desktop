/**
 * Test file for profile class
 * Author: Mohseen Mukaddam
 */
var LEVEL_UP = LEVEL_UP || {};
 (function (LEVEL_UP) {
 	//1. Player 2.Skillset 3.Task
 	//health, exp, level
 	var newPlayer = new LEVEL_UP.PLAYER.Player(100, 0, 1);
 	//IQ, Strength, Creativity, Endurance, Charisma
 	var newSkillset = new LEVEL_UP.SKILLSET.Skillset(5, 8, 10, 3, 4);
 	//desc, baseGain, baseDamage
 	var newTask = new LEVEL_UP.TASK.Task("first task", 10, 25);

 	var newProfile = new LEVEL_UP.PROFILE.Profile(newPlayer, newSkillset, newTask);

 	console.table(newProfile);
 })(LEVEL_UP);