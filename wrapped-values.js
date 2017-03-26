// 'use strict';
//
// function attachTitle(name) {
//   return `DR. ${name}`;
// }
//
// const p = Promise.resolve('MANHATTAN');
//
// p.then(attachTitle).then(console.log);

'use strict';

function attachTitle(name) {
  return `DR. ${name.firstName} ${name.lastName}`;
}

const p = new Promise(function(resolve, reject) {
  resolve({firstName: 'Jim', lastName: 'Manhattan'});
});

p.then(attachTitle).then(console.log);
