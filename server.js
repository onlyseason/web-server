var express = require('express');
var PORT = 3000;
var app = express();

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		var currentDate =  new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + currentDate);
		next();
	}
};

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