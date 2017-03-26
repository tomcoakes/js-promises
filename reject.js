'use strict';

const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(Error('REJECTED!'));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

function onSuccess(result) {
  console.log(result);
}

promise.then(onSuccess, onReject);
