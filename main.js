const { app, BrowserWindow } = require('electron')
var yahooFinance = require('yahoo-finance');

//making the window
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 1000
    })
  
    win.loadFile('./html/index.html')
  }
  console.log(1);
  app.whenReady().then(() => {
    createWindow()
  });
  

  var yahooFinance = require('yahoo-finance');



yahooFinance.quote({
  symbol: 'AAPL',
  modules: ['summaryDetail', 'price']       // optional; default modules.
}, function(err, quote) {
  console.log(quote);
});