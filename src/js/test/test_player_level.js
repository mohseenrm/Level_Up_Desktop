'use strict';
import { get_base_points, get_max_points, level_update } from '../class/update_modules';
import { Player   } from '../class/Player';
import { Skillset } from '../class/skillset';
import { Update   } from '../class/update';
import { Profile  } from '../class/profile';

// let Player   = require( '../class/player' );
// let Skillset = require( '../class/skillset' );
// let Update   = require( '../class/update' );
// let Profile  = require( '../class/profile' );

let mohseen_player = new Player({
	health     : 40,
	exp        : 0,
	level      : 5
});
console.log( mohseen_player + " has been created" );
let mohseen_skill = new Skillset({
	iq         : 10,
	creativity : 11,
	strength   : 11,
	endurance  : 8,
	charisma   : 9
});
console.log( mohseen_skill + " has been created" );

mohseen_player.set_attr({
	exp: 150
});
let current_data = mohseen_player.get_attr();

current_data.update_function = level_update;
// console.log( current_data );
let mohseen_update = new Update( current_data );
console.log( mohseen_update );

let mohseen = new Profile({
	player   : mohseen_player,
	skillset : mohseen_skill,
	update   : mohseen_update
});
console.log( mohseen );
console.log( mohseen.Player.get_attr() );