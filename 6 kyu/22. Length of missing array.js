// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0;
  }

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
      return 0;
    }
  }

  arrayOfArrays.sort((prev, current) => {
    return prev.length - current.length;
  });

  let result = 0;

  for (let i = 0; i < arrayOfArrays.length - 1; i++) {
    if (!(arrayOfArrays[i].length + 1 === arrayOfArrays[i + 1].length)) {
      result = arrayOfArrays[i].length + 1;
      break;
    }
  }
  return result;
}

//getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]);

//getLengthOfMissingArray([[1, 2, 2], [2, 1], [2, 3, 3, 1, 3, 2],[4, 1, 3, 4]]);

//getLengthOfMissingArray([ ]);

// getLengthOfMissingArray([[],
//     [2],
//     [1, 1],
//     [3, 0, 2, 1],
//     [0, 3, 4, 1, 2],
//     [2, 4, 4, 4, 0, 1],
//     [1, 2, 0, 1, 2, 1, 2],
//     [0, 1, 1, 1, 4, 1, 2, 0],
//     [4, 3, 3, 2, 1, 0, 3, 0, 1]]);

//getLengthOfMissingArray([ [ null ], [ null, null, null ] ] );

getLengthOfMissingArray([[1, 2, 2], null]);
