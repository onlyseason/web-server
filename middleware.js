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

module.exports = middleware;