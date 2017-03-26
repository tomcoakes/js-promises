'use strict';

const promise = new Promise(function(resolve, reject) {
  resolve('I FIRED');
  reject(Error('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error);
}

promise.then(console.log, onRejected);
