var mymodule = require('./06-module');
mymodule(process.argv[2], process.argv[3], function(err, results) {
  if (err) {
    console.log('Error: ', err);
  }

  results.forEach(function(item) {
    console.log(item)
  });
});