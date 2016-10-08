'use strict'

const cryptoJSON = require( 'crypto-json' );
const fs = require( 'fs' );

exports.decrypt = ( filepath ) => {
	let decrypted = '';
	fs.readFile( filepath, 'utf-8', ( error, data ) => {
		if( error )
			return console.log( 'File error ' + error );
		let pass_key = '707rwe78fudhwqpwriufdhr8ehyqr9pe8fud';
		decrypted = cryptoJSON.decrypt( data, pass_key );
	});
	return ( decrypted );
};
// module.exports = decrypt;