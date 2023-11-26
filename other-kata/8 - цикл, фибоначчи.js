// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
function fib(n) {
  let fibonacchiArray = [1, 1];

  for (let i = 3; i <= n; i++) {
    const prevElement = fibonacchiArray[fibonacchiArray.length - 1];
    const prevPrevElement = fibonacchiArray[fibonacchiArray.length - 2];

    fibonacchiArray.push(prevElement + prevPrevElement);
  }

  return fibonacchiArray[n - 1];
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
