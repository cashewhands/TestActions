const express = require('express')
const app = express();
const cors = require("cors")


app.use(cors());
app.disable("x-powered-by");

// Body parser
app.use(express.json());

const PORT = process.env.PORT || 3000;
// let helmet = require("helmet");
// let app2 = express(); // Compliant
// app2.use(helmet.hidePoweredBy());


const server = app.listen(PORT, async function() {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log('Server listening at http://127.0.0.1:%s', port);
});

app.get('/', (req,res) => res.send('API Running!'));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
  });

  module.exports = app;