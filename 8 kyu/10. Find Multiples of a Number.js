// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  let array = [];

  for (let i = 1; i <= Math.floor(limit / integer); i++) {
    array.push(i * integer);
  }

  console.log(array);
  return array;
}

findMultiples(11, 54); // [11, 22, 33, 44]
findMultiples(4, 27); // [4, 8, 12, 16, 20, 24]
