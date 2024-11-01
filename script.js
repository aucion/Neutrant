const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
  request({ url: 'https://www.google.com', headers: { 'X-Frame-Options': '' } })
    .on('response', function(response) {
      delete response.headers['x-frame-options']; // Remove the header
      res.writeHead(response.statusCode, response.headers);
    })
    .pipe(res);
});

app.listen(3000);
