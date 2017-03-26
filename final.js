'use strict';

const qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
  .then(function(userID) {
    return qhttp.read(`http://localhost:7001/${userID}`)
  })
  .then(function(json) {
    console.log(JSON.parse(json));
  })
  .catch(console.log)
  .done();
