// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (i === 2) {
      catYears = catYears + 9;
      dogYears = dogYears + 9;
    } else {
      catYears = catYears + 4;
      dogYears = dogYears + 5;
    }
  }
  return [humanYears, catYears, dogYears];
};

humanYearsCatYearsDogYears(10);
