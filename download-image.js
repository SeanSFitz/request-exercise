var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    throw err;
  })
  .on('response', function (response) {
    console.log(`Response status code: ${response.statusCode}`);
    console.log(response.headers['content-type']);
    console.log(`Starting download.`)
  })
  .on('end', function () {
    console.log(`Download complete.`);
  })
  .pipe(fs.createWriteStream('./future.jpg'));