// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
  // Получаем последний символ строки
  let lastSimbol = strng[strng.length - 1];

  // 1. Если последний символ строки является числом
  if (!isNaN(lastSimbol)) {
    // 1.1. Получаем индекс буквы, которая находится перед числами в конце строки
    let indexOfLastLetterInStrng;
    for (let i = strng.length - 1; i >= 0; i--) {
      if (isNaN(strng[i])) {
        indexOfLastLetterInStrng = i;
        break;
      }
    }

    // 1.2. С помощью последней буквы в строке ищем цифры, которые находятся в конце массива, выделяем их в отдельную строку
    let stringWithNumbers = strng.slice(indexOfLastLetterInStrng + 1, strng.length);

    // 1.3. Преобразовываем строку stringWithNumbers в number, увеличиваем ее на 1 и преобразовываем обратно в строку
    let stringWithNumbersPlusOne = String(parseInt(stringWithNumbers) + 1);

    // 1.4. Проверяем, потерялись ли нули при преобразовании строки stringWithNumbers в число.
    // Если потерялись, то добавляем их
    if (stringWithNumbersPlusOne.length < stringWithNumbers.length) {
      let numberOfMissingZeros = stringWithNumbers.length - stringWithNumbersPlusOne.length;

      let stringWithMissingZeros = '';
      for (let i = 1; i <= numberOfMissingZeros; i++) {
        stringWithMissingZeros = stringWithMissingZeros.concat('0');
      }

      stringWithNumbersPlusOne = stringWithMissingZeros.concat(stringWithNumbersPlusOne);
    }

    // 1.5. Ищем начало строки strng до цифр в конце,
    // добавляем к нему полученную выше строку stringWithNumbersPlusOne
    let theBeginningOfString = strng.slice(0, indexOfLastLetterInStrng + 1);

    let newString = theBeginningOfString.concat(stringWithNumbersPlusOne);
    console.log('добавляем к строке', strng, '1, получаем', newString);
    return newString;
  } else {
    // 2. Если последний символ строки НЕ является числом
    // добавляем к концу строки '1'
    let newString = strng.concat('1');
    // console.log('т.к. последний символ не является числом, добавляем к строке', strng, '1, получаем', newString);
    return newString;
  }
}

incrementString('foo');

incrementString('foobar23');

incrementString('foo0042');

incrementString('foo9');

incrementString('foo099');

incrementString('');
