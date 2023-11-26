// Факториал с помощью цикла
// Факториал числа — это произведение всех чисел от единицы до этого числа.
// Например, факториал 5 — это произведение (1 × 2 × 3 × 4 × 5) = 120.

function factorial(n) {
  let result = 1;
  console.log('res', result);

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  console.log('res', result);
  return result;
}

factorial(5);

// Факториал с помощью рекурсии
function factorialRecursion(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorialRecursion(n - 1);
  }
}

console.log(factorialRecursion(5));
