'use strict'

const cryptoJSON = require( 'crypto-json' );
const fs = require( 'fs' );

module.exports = function encrypt( filepath ) {
	let encrypted = '';
	fs.readFile( filepath, 'utf-8', ( error, data ) => {
		if( error )
			return console.log( 'File error ' + error );
		let pass_key = '707rwe78fudhwqpwriufdhr8ehyqr9pe8fud';
		encrypted = cryptoJSON.encrypt( data, pass_key );
		
	});
	return ( encrypted );
};
// exports.encrypt = encrypt;