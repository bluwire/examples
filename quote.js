var http = require('http');

function getQuote() {
    var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            var quote = JSON.parse(body);
            console.log(quote);
            console.log("Got a quote: ", quote[0].title + ": " + quote[0].content);
        });
    }).on('error', function(e) {
        console.log("Got an error: ", e);
    });
    return quote;
}
