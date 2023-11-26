// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:
//
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumToCycle(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  console.log(result);
  return result;
}

const start = new Date().getTime();
sumToCycle(100000);
const end = new Date().getTime();
// console.log(`sumToCycle 100: ${end - start}ms`); // 8ms
console.log(`sumToCycle 100000: ${end - start}ms`); // 13ms

function sumToRecursion(n) {
  if (n === 1) {
    return n;
  } else {
    return n + sumToRecursion(n - 1);
  }
}

const start2 = new Date().getTime();
console.log(sumToRecursion(100000));
const end2 = new Date().getTime();
//console.log(`sumToRecursion 100: ${end2 - start2}ms`); // 8ms
console.log(`sumToRecursion 100000: ${end2 - start2}ms`); // RangeError: Maximum call stack size exceeded

function sumToFormula(n) {
  const sum = ((1 + n) * n) / 2;

  console.log(sum);
  return sum;
}

const start3 = new Date().getTime();
sumToFormula(100000);
const end3 = new Date().getTime();
//console.log(`sumToFormula 100: ${end3 - start3}ms`); // 7ms
console.log(`sumToFormula 100000: ${end3 - start3}ms`); // 8ms
