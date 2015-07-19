var express = require('express');
var app = express();

app.get('/locations', function(request, response) {
    var cities = ['Caspiana', 'Indigo', 'Paradise'];
    response.send(cities);
});
app.get('/locals', function(request, response) {
    var cities = '<ul><li>Caspiana</li><li>Indigo</li></ul>';
    response.send(cities);
});
app.get('/location', function (req,res){
	//permanent redirect
	res.redirect(301,'/locals');
});

app.listen(3001, function() {
    console.log("Running Express");
});
//using curl -i localhost:3001 to check out my headers