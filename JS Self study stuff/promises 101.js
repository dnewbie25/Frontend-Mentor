'use strict'

// basic promise syntax
let promise = new Promise(function(resolve, reject){
  setTimeout(()=>resolve("done"),3000)
});
// then takes 2 arguments, one for resolved and the other for reject, here they are called result and error

// promise.then(
//   result=>console.log(result),
//   error=>console.log(error)
// );

promise.then(console.log('doneYY'))