/**
 * test player class
 */

let Player = require('./player');

let mohseen = new Player({
	health: 100,
	exp: 50,
	level: 5
});

// console.log(mohseen);
console.log(mohseen.get_attr());
// console.log(mohseen.get_attr({
	// health: health,
	// exp: exp,
	// level: level
// }));