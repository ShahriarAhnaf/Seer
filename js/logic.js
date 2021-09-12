var yFinance = require('yahoo-finance');

if(window.location.href == "index.html")
{
    yFinance.quote({
        symbol: 'TSLA',
        modules: ['price', 'summaryDetail']       // optional; default modules.
    }, function(err, quote) {
        console.log(quote);
      });
}