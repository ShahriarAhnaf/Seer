// main.js

// Modules to control application life and create native browser window
const { createPublicKey } = require('crypto');
const { app, Menu, MenuItem, BrowserWindow, ipcMain, NativeImage } = require('electron')
const path = require('path')

 
function createWindow() {
  // Create the browser window.
  const  mainWindow = new BrowserWindow({});

  // and load the index.html of the app.
  mainWindow.loadFile('src/html/index.html')
  //build menu from template 
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {createWindow();} // this will create a new window whenever the app is clicked like I want it to!
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
  else console.log("mac mf");
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.




const mainMenuTemplate = [
  {label:'electron'}, // empty menu slot for the electron thing 
  {
    label: 'bruh',
    submenu:[
      {
        label: 'quit',
        accelerator : process.platform == 'darwin' ? "Command+Q" : "alt+f4",
        click(){
          console.log("finally my watch has ended");
          app.quit();
        }
      }
    ]
  }
];