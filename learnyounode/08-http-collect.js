var http = require('http'),
    bl = require('bl'),   // BufferList module. npm install bl
    url = process.argv[2];

http.get(url, function(res) {
  var fullResponse = '';
  res.pipe(bl(function(err, data) {
    fullResponse += data;
  }));
  res.on('end', function() {
    console.log(fullResponse.length);
    console.log(fullResponse);
  });
});