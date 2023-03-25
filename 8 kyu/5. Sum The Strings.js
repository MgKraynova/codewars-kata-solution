// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

function sumStr(a, b) {
  if (a === '') {
    a = 0;
  }
  if (b === '') {
    b = 0;
  }

  return String(parseInt(a) + parseInt(b));
}
sumStr('4', '5');
