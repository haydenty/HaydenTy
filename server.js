//Install express server
const express = require('express');
const app = express();

// Serve only the static files from the directory
app.use(express.static(__dirname + '/public'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log('Now live on port 8080!');