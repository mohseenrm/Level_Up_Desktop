'use strict'

const cryptoJSON = require( 'crypto-json' );

let encrypt = ( filepath ) => {
	let crypted = '';

	let data = require( filepath );

	console.log( "file data: " + data.username + " pwd: " + data.password );
	crypted = cryptoJSON.encrypt( data, passKey, {
		keys: ['username']
	} );
	console.log( "encryption complete!" );
return( crypted );
};
module.exports = encrypt;