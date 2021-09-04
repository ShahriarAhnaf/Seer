const { default: axios } = require('axios')

import yahooFinance from 'yahoo-finance2';

const { app, BrowserWindow } = require('electron')
//use axios.all to get multiple data points if that is possible 
//or use axios.get to use one single response point for the program


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
  