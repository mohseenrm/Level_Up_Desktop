'use strict'
const { ipcMain } = require( 'electron' ).ipcMain;
// let ipcMain = remote.ipcMain;
// const { ipcMain } = remote.ipcMain;

exports.auth = () => {
	//ipc controls
	ipcMain.on( 'auth-user', ( event, args ) => {
	  let level_up_user = {
	    username : '',
	    password : ''
	  };
	  console.log( args );
	  
	  level_up_user.username = args.username || level_up.username;
	  level_up_user.password = args.password || level_up.password;

	  response = auth_user( level_up_user );
	  event.returnValue = response;
	});

	let auth_user = ( user_credentials ) => {
	  //fetch data from db;
	  if( user_credentials.username === 'MoMo' && user_credentials.password === 'admin' ){
	    return( true );
	  }
	  return( false );
	};
};