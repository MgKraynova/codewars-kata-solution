// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript
// The missing term will never be the first or last one.
var findMissing = function (list) {
  const progressionSum = ((list[0] + list[list.length - 1]) / 2) * (list.length + 1);

  const listSum = list.reduce((previous, current) => {
    return previous + current;
  });

  const missingItem = progressionSum - listSum;

  return missingItem;
};

findMissing([1, 3, 4]); // 2
findMissing([1, 3, 5, 9, 11]); // 7
