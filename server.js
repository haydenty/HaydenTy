var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.all('/*', function(req, res, next){
  res.redirect('/');
});

var server = app.listen(3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});

app.get('*', function(req, res) {
	res.sendFile('./public/index.html');
});
