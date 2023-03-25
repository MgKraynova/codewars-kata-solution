// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

// Given a variable n,
//
//     If n is an integer, Return a string with dash'-'marks before and after each odd integer,
//     but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
//
//     If n is not an integer, return an empty value.
//
//     Ex:
//
// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    return 'NaN';
  }

  if (num < 0) {
    num = Math.abs(num);
  }

  let arrayOfStringNumbers = num.toString().split('');
  let finalString = '';

  arrayOfStringNumbers.forEach((string, index) => {
    if (index === arrayOfStringNumbers.length - 1) {
      finalString = finalString.concat(string);
    } else if (parseInt(string) % 2 !== 0 && parseInt(string) !== 0) {
      finalString = finalString.concat(string.concat('-'));
    } else if (parseInt(arrayOfStringNumbers[index + 1]) % 2 !== 0 && parseInt(arrayOfStringNumbers[index + 1]) !== 0) {
      finalString = finalString.concat(string.concat('-'));
    } else {
      finalString = finalString.concat(string);
    }
  });
  console.log(finalString);
}

dashatize(974302); // "9-7-4-3-02"
dashatize(NaN);
