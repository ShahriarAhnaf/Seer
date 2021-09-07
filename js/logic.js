var yFinance = require('yahoo-finance');


function getPrice(){

var result = yFinance.quote('AAPL');

console.log(2);
//document.getElementById('price1').innerHTML = result;

document.getElementsByID('price1').innerHTML = "weather";

console.log(document.getElementById('time'));
}

getPrice();