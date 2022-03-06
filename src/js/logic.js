
var yFinance = require('yahoo-finance');

if (window.location.href.includes("graphs.html")) {
  document.getElementById('changed').innerHTML = 'javascript has changed it';
  console.log("we in");
}






// returns JSON object
function retrieve_Quote(symbol){
  yFinance.quote({
    symbol: symbol,
    modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
  }, function (err, quotes) { 
    return quotes; 
  });
}
