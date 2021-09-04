const { app, BrowserWindow } = require('electron')

//making the window
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 1000
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  });
  