'use strict'
const path        = require( 'path' );
const { ipcMain } = require( 'electron' );
const decrypt     = require( './decrypt' );

let auth_listner = ( resource_path ) => {
	ipcMain.on( 'auth-user', ( event, args ) => {
		let level_up_user = {
			username : '',
			password : ''
		};
		// console.log( args );
		console.log( 'path inside auth_user: ' + resource_path );
		level_up_user.username = args.username || level_up.username;
		level_up_user.password = args.password || level_up.password;

		// console.log( 'this path for decrypt(before): ' + path.join( resource_path, 'src', 'user', 'users.json' ) );
		let response = ( ( user_credentials ) => {
			//fetch data from db (so to speak..);
			console.log( 'this path for decrypt: ' + path.join( resource_path, 'src', 'user', 'users.json' ) );
			let saved_data = decrypt( path.join( resource_path, 'src', 'user', 'users.json' ) );

			if( user_credentials.username === saved_data.username && user_credentials.password === saved_data.password ){
				return( true );
			}
			return( false );
		} )( level_up_user );
		//this chats back to the ipcRenderer process
		event.returnValue = response;
	});
};
module.exports = auth_listner;
