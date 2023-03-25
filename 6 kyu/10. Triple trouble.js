// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

function tripledouble(num1, num2) {
  const arrayFromNum1 = [...String(num1)];
  let triple = '';
  const arrayOfTriples = [];

  // 1. Отбираем все тройки в num1, добавляем их в массив arrayOfTriples
  for (let i = 0; i < String(num1).length; i++) {
    if (arrayFromNum1[i] === arrayFromNum1[i + 1] && triple.length < 3) {
      triple = triple.concat(arrayFromNum1[i]);

      if (triple.length === 2) {
        triple = triple.concat(arrayFromNum1[i + 1]);

        arrayOfTriples.push(triple);
        triple = '';
      }
    } else {
      triple = '';
    }
  }

  // 2. Если в num1 нет троек, то возвращаем false
  if (arrayOfTriples.length === 0) {
    console.log('false');
    return 0;
  }

  // 3. Если тройки есть, то проверяем, есть ли в num2 соответствующие двойки
  for (let i = 0; i < arrayOfTriples.length; i++) {
    const double = arrayOfTriples[i].slice(1);
    if (String(num2).includes(double)) {
      console.log(true);
      return 1;
      break;
    }
  }

  // 4. Если двоек нет, то возвращаем 0
  return 0;
}

// tripledouble(451999277, 41177722899); //true
//
// tripledouble(4519992777, 41177722899); //true
//
//
// tripledouble(1222345, 12345); //false
//
// tripledouble(12345, 12345); // false

//tripledouble(123999, 12399);//true
// tripledouble(6656665, 56565);

tripledouble(3311111222, 102203199191); //true
