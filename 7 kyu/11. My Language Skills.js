// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

function myLanguages(results) {
  let result = [];

  let arrayOfResults = [];

  for (key in results) {
    if (results[key] >= 60) {
      arrayOfResults.push([key, results[key]]);
    }
  }

  arrayOfResults.sort((current, next) => {
    return next[1] - current[1];
  });

  arrayOfResults.forEach((item) => {
    result.push(item[0]);
  });

  return result;
}

myLanguages({ Java: 10, Ruby: 80, Python: 65 });
