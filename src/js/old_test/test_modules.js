/**
* Test file for profile class
* Author: Mohseen Mukaddam
*/
//1. Player 2.Skillset 3.Task
//health, exp, level
var Player = require('../class/player');
var Skillset = require('../class/skillset');
var Task = require('../class/task');
var Profile = require('../class/profile');

var momoPlayer = new Player(100, 0, 1);
//IQ, Strength, Creativity, Endurance, Charisma
var momoSkillset = new Skillset(5, 8, 10, 3, 4);
//desc, baseGain, baseDamage
var momoTask = new Task("first task", 10, 25);

var momoProfile = new Profile(momoPlayer, momoSkillset, momoTask);

console.table(momoProfile);
console.log(momoProfile.Player);