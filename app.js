var express = require('express');
var app = express();

app.get('/locations', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});

app.listen(3001, function () {
  console.log("Running Express");
});