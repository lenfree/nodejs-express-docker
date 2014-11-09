var express = require('express');
var app = express();

var filenames = {
  'myfile1' : 'myfile_1',
  'myfile2' : 'myfile_2'
}

app.get('/:filename', function(request,response){

  response.sendFile(__dirname + '/' + filenames[request.params.filename], function(err) {
    if (err) {
      console.log(err);
      repsonse.status(err.status).end();
    }
    else{
      console.log('Sent' + filenames[request.params.filename]);
    }
  });

});

app.listen(8080);
console.log('Express server started on port 8080');
