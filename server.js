var express = require('express');
var multer  = require('multer');
var upload = multer();
var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/upload", upload.single('file'), function (request, response) {
  response.send({'filesize': request.file.size});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
