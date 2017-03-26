'use strict';

function all(promise1, promise2) {
  const p = new Promise(function(resolve, reject) {
    let counter = 0;
    const results = [];
    promise1.then(function(result) {
      counter = counter + 1;
      results.push(result);
      if (counter === 2) {
        resolve(results);
      }
    });
    promise2.then(function(result) {
      counter = counter + 1;
      results.push(result);
      if (counter === 2) {
        resolve(results);
      }
    });
  });
  return p;
}

all(getPromise1(), getPromise2()).then(console.log);
