// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

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

const printListRecursion = (list) => {
  if ('value' in list) {
    console.log('printListRecursion', list.value);
  }
  if ('next' in list && list.next) {
    printListRecursion(list.next);
  }
};

//printListRecursion(list);

const printListCycle = (list) => {
  let objToCheck = list;
  while (objToCheck && 'value' in objToCheck) {
    console.log('printListCycle', objToCheck.value);
    objToCheck = objToCheck.next;
  }
};

//printListCycle(list);

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

const printListRecursionReverse = (list) => {

};

printListRecursionReverse(list);

const printListCycleReverse = (list) => {
  const values = [];
  let objectToCheck = list;

  while (objectToCheck && 'next' in objectToCheck && 'value' in objectToCheck) {
    values.push(objectToCheck.value);
    objectToCheck = objectToCheck.next;
  }

  values.reverse().forEach(item => console.log(item))
};

//printListCycleReverse(list)