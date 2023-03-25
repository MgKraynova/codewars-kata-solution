// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

Array.prototype.square = function () {
  return this.map(function (item) {
    return item * item;
  });
};

Array.prototype.cube = function () {
  return this.map(function (item) {
    return item * item * item;
  });
};

Array.prototype.average = function () {
  if (this.length === 0) {
    return NaN;
  } else {
    let sum = 0;

    this.forEach((item) => {
      sum = sum + item;
    });

    return sum / this.length;
  }
};

Array.prototype.sum = function () {
  let sum = 0;

  this.forEach((item) => {
    sum = sum + item;
  });

  return sum;
};

Array.prototype.even = function () {
  let evenNumbers = [];

  this.forEach((item) => {
    if (item % 2 === 0) {
      evenNumbers.push(item);
    }
  });

  return evenNumbers;
};

Array.prototype.odd = function () {
  let oddNumbers = [];

  this.forEach((item) => {
    if (!(item % 2 === 0)) {
      oddNumbers.push(item);
    }
  });

  return oddNumbers;
};
// console.log(Array.prototype);

let b = [2, 5];
b.square();
b.cube();
b.average();
b.even();
console.log(b);
