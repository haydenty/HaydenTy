var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

// Start the server
app.set('port', 3000);
app.all('/*', function(req, res, next){
  res.redirect('/');
});

var server = app.listen(app.get('port'), function() { //helpful for debuggin but not needed from production (I think)
  console.log('Express server listening on port ' + server.address().port);
});

app.get('*', function(req, res) {
	res.sendFile('./public/index.html');
});
