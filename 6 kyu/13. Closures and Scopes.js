// https://www.codewars.com/kata/526ec46d6f5e255e150002d1/train/javascript

function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

const callbacks = createFunctions(5); // create an array, containing 5 functions

console.log(callbacks[0]()); // must return 0

console.log(callbacks[3]()); // must return 3
