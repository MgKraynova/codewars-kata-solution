// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  const arrayWithZeros = [];

  const arrayWithoutZeros = arr.filter((item) => {
    if (item === 0) {
      arrayWithZeros.push(item);
    }

    return item !== 0;
  });

  return arrayWithoutZeros.concat(arrayWithZeros);
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
