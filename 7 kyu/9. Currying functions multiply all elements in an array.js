// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(array) {
  return function (number) {
    return array.map((item) => {
      return item * number;
    });
  };
}

//multiplyAll([1, 2, 3])(2) = [2, 4, 6];
