'use strict';

const promise = Promise.reject(Error('This is an error'));
// const promise = Promise.resolve('This promise resolved');

function onResolve(result) {
  console.log('Promise resolved with result: ', result);
}

function onReject(error) {
  console.log('Promise rejected with error: ', error);
}

promise.then(onResolve)
  .catch(onReject);
