// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
}
