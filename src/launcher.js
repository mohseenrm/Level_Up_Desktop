/**
 * This is the main file that is called by electron
 * app, BrowsserWindow, ipcMain can only be called in this file
 * Author: Mohseen Mukaddam
 */
const { app, BrowserWindow, ipcMain } = require( 'electron' );
const path          = require( 'path' );
const jsonfile      = require( 'jsonfile' );

const resource_path = path.dirname( __dirname );
const pwd           = path.join( resource_path, 'src' );

const encrypt       = require( path.join( pwd, 'js', 'modules', 'encrypt' ) );
const decrypt       = require( path.join( pwd, 'js', 'modules', 'decrypt' ) );
 // const args = require( 'yargs' );
 
//jsonfile.writeFileSync(filepath, dataObj, {spaces: 2});

console.log( 'Resource path: ' + path.dirname( __dirname ) );

const auth_listner = require( path.join( pwd, 'js', 'modules', 'auth_user' ) );

auth_listner( resource_path );

let win;

function createWindow () {
  // Create the browser window.
  // win = new BrowserWindow({width: 800, height: 600})

  win = new BrowserWindow({
    width          : 1024,
    height         : 800
  });

  // and load the index.html of the app.
  win.loadURL( 'file://' + path.join( pwd, 'index.html' ) );

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