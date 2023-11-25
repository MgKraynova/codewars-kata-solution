// Найти сумму всех value

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const getSum = (list) => {
  let sum = 0;
  let listToCheck = list;

  while (listToCheck && 'value' in listToCheck && typeof listToCheck.value === 'number') {
    sum += listToCheck.value;

    if ('next' in listToCheck) {
      listToCheck = listToCheck.next;
    }
  }

  console.log('sum', sum);
};

getSum(list);
