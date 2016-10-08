// const { icpMain }            = require( 'ipc-main' );
const path                   = require( 'path' );
const { app, BrowserWindow, ipcMain } = require( 'electron' );
const fs = require( 'fs' );
// console.log(require.resolve('electron'));
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// let auth = require( './js/modules/auth_user' );
// auth();
//ipc controls
const encrypt = require( './js/modules/encrypt' ).encrypt;
console.log(encrypt);
const decrypt = require( './js/modules/decrypt' ).decrypt;
data = encrypt( './user/users.json' );
fs.writeFile( './js/modules/encrypt', data, ( err ) => {
  if ( err ) throw err;
  console.log( 'It\'s saved!' );
});

ipcMain.on( 'auth-user', ( event, args ) => {
  let level_up_user = {
    username : '',
    password : ''
  };
  console.log( args );

  level_up_user.username = args.username || level_up.username;
  level_up_user.password = args.password || level_up.password;

  response = (( user_credentials ) => {
    //fetch data from db;
    recieved_data = decrypt( './user/users.json' );
    if( user_credentials.username === recieved_data.username && user_credentials.password === recieved_data.password ){
      return( true );
    }
    return( false );
  })( level_up_user );
  event.returnValue = response;
});

let auth_user = ( user_credentials ) => {
  //fetch data from db;
  if( user_credentials.username === 'MoMo' && user_credentials.password === 'admin' ){
    return( true );
  }
  return( false );
};

let win;

function createWindow () {
  // Create the browser window.
  // win = new BrowserWindow({width: 800, height: 600})

  win = new BrowserWindow({
    width          : 800,
    height         : 600
  });

  // and load the index.html of the app.
  win.loadURL( `file://${__dirname}/index.html` );

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on( 'closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on( 'ready', createWindow )

// Quit when all windows are closed.
app.on( 'window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if ( process.platform !== 'darwin' ) {
    app.quit()
  }
})

app.on( 'activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if ( win === null ) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.