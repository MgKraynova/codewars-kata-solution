// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
  let array = [];

  for (let i = 0; i <= n; i++) {
    array.push(Math.pow(2, i));
  }
  console.log(array);
  return array;
}

powersOfTwo(4);
