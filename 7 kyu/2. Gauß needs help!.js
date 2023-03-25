// https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript

function f(n) {
  let sum = 0;
  if (!(typeof n === 'number')) {
    console.log('false');
    return false;
  } else if (n <= 0) {
    console.log('false');
    return false;
  } else if (!Number.isInteger(n)) {
    return false;
  } else {
    for (let i = 0; i <= n; i++) {
      sum = sum + i;
    }
    console.log(sum);
    return sum;
  }
}

f(100);
f(300);
f(5000);
f(-10);
f('6');
