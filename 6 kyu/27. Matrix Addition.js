// https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

function matrixAddition(a, b) {
  const result = [];

  a.forEach((array, index) => {
    const subResult = [];
    for (let i = 0; i < array.length; i++) {
      subResult.push(array[i] + b[index][i]);
    }
    result.push(subResult);
  });

  return result;
}

matrixAddition(
  [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1],
  ],
  [
    [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3],
  ]
);

// // returns:
//     [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]
