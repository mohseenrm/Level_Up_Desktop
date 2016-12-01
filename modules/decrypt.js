'use strict'

const cryptoJSON = require( 'crypto-json' );

let decrypt = ( filepath ) => {
	let decrypt = '';
	let passKey = '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud';

	let data = require( filepath );
	decrypt = cryptoJSON.decrypt( data, passKey, {
		keys: ['username']
	} );

	return ( decrypt );
};
module.exports = decrypt;