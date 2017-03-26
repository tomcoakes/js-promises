'use strict';

function parsePromised(json) {
  return new Promise(function(resolve, reject) {
    try {
      resolve(JSON.parse(json));
    } catch (err) {
      reject(err);
    }
  });
}

parsePromised(process.argv[2]).catch(console.log);
