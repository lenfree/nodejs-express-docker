var request = require('request');

describe('Test my express',function(){

  it("should respond with myfile_1", function(done) {
    request("http://192.168.59.105:8080/myfile1", function(error, response, body){
      expect(body).toEqual("this is myfile 1\n");
      done();
    });
  });

});

