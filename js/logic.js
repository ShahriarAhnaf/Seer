
var yFinance = require('yahoo-finance');

if (window.location.href.includes("graph.html")) {
  document.getElementsByName('p').innerHTML = ' javascript has changed it';
  console.log("we in");
}

try{
yFinance.quote({
  symbol: 'AAPL',
  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
}, function (err, quotes) {
  console.log(quotes);
});
}
catch(error){
  console.log(error);
}
