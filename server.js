var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	console.log('about express!');
	res.send('Welcome to about page!');
});

//app.use(express.static());
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Server is running on port ' + PORT);
});