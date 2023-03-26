// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function orderWeight(strng) {
  const arrayWithNumbersInStringFormat = strng
    .split(' ')
    .map((item) => item.match(/[0-9]+/))
    .filter((item) => item)
    .map((item) => item[0]);

  const arrayWithWeights = arrayWithNumbersInStringFormat.map((item) => {
    let weight = 0;

    for (let i = 0; i < item.length; i++) {
      weight = weight + parseInt(item[i]);
    }

    return weight;
  });

  const jointArray = [];

  for (let i = 0; i < arrayWithWeights.length; i++) {
    const element = [arrayWithWeights[i], arrayWithNumbersInStringFormat[i]];

    jointArray.push(element);
  }

  const sortedArray = jointArray.sort((prev, next) => {
    if (prev[0] === next[0]) {
      return prev[1].localeCompare(next[1]);
    }

    return prev[0] - next[0];
  });

  return sortedArray.map(item => item[1]).join(' ')
}

orderWeight('56 65 74 100 99 68 86 180 90'); // "100 180 90 56 65 74 68 86 99"
