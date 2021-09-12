const { app, BrowserWindow } = require('electron')

var yFinance = require('yahoo-finance');


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
  


  yFinance.quote({
      symbol: 'TSLA',
      modules: ['price', 'summaryDetail']       // optional; default modules.
    }, function(err, quote) {
      var price = quote.price.regularMarketPrice;
      console.log(price);
  });
