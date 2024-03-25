let p = new Promise((resolve, reject) => {
  let a = 1 + 3
  setTimeout(() => {
    if (a === 2) {
      resolve(true)
    } else {
      reject(false)
    }
  }, 1000)
});

p.then((value) => {
  console.log('The promise returned ---> ' + value);
}).catch((error) => {
  console.log('The promise returned ---> ' + error);
}).finally(() => {
  // finally executes regardless of the promise result
  console.log('TASK COMPLETED!');
})