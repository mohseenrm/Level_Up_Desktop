/**
 * test player class
 */
'use strict';

import {first_module, second_module} from './samples';

let Player = require( './player' );
let Skillset = require( './skillset' );

let mohseen = new Player({
	health: 100,
	exp: 50,
	level: 5
});

// console.log(mohseen);
console.log( mohseen.get_attr() );

let momo_skills = new Skillset({
	iq: 10,
	creativity: 11,
	charisma: 8,
	strength: 10,
	endurance: 5
});

console.log( momo_skills.get_attr() );
//CoI right here!
Player.prototype.new_feature = new first_module();
mohseen.new_feature.do_something();