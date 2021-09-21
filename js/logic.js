// var yFinance = require('yahoo-finance');

if (window.location.href.includes("graph.html"))
{
    document.getElementsByName('p').innerHTML = ' javascript has changed it';
    console.log("we in");
}


/* const Time = Date.now();
var avg50, avg200;
yFinance.quote({
    symbol: 'BB',
    modules: ['price', 'summaryDetail']      // optional; default modules.
  }, function(err, quote) {
    console.log(1);
    console.log(quote);
    avg50 = quote.summaryDetail.fiftyDayAverage;
     avg200 = quote.summaryDetail.twoHundredDayAverage;
    if(avg200 < avg50){
      console.log("buy time");
    }
    else{
      console.log("time to sell my fren");
    }

    const elapsed = Date.now() - Time;
  console.log("the latency for that request is ", elapsed);
});
*/