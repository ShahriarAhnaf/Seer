
var yFinance = require('yahoo-finance');

// events listeners in the script!

if (window.location.href.includes("index.html")) {
  document.getElementById("btn").addEventListener("click", btnClick);
}




if (window.location.href.includes("graphs.html")) {
  document.getElementById('changed').innerHTML = 'javascript has changed it';
  console.log("we in");
}


function btnClick(){
  console.log("penis")
  document.querySelector('#btn').value = 'you clicked developer power';
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
