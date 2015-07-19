var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/blocks', function(request, response) {
    var blocks = ['Caspiana', 'Indigo', 'Paradise','Belize'];
    response.json(blocks);
});
app.get('/locals', function(request, response) {
    var cities = '<ul><li>Caspiana</li><li>Indigo</li></ul>';
    response.send(cities);
});
app.get('/location', function (req,res){
	//permanent redirect
	res.redirect(301,'/locals');
});

// app.get('index', function(req,res){
// 	req.sendFile(__dirname + "/public/index.html")
// })

app.listen(3001, function() {
    console.log("Running Express");
});
//using curl -i localhost:3001 to check out my headers