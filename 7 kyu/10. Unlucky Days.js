// https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript

function unluckyDays(year) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13);

    console.log('i', i, 'date.getDay()', date.getDay());

    if (date.getDay() === 5) {
      count++;
    }
  }

  console.log(count);
}

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

unluckyDays(2015);
