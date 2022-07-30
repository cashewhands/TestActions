let express = require('express')
let app = express();

app.disable("x-powered-by");

// let helmet = require("helmet");
// let app2 = express(); // Compliant
// app2.use(helmet.hidePoweredBy());
app.get('/', function(req,res) {
    console.log("This was added to make it look good!")
    res.send('Hello World!');
})


var server = app.listen(3000, async function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})