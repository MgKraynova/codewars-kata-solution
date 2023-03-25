// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// Your task, is to create NxN multiplication table, of size provided in parameter.
//
//     for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  let table = [];

  for (let i = 0; i < size; i++) {
    let firstNumberInLine = size - i;
    //console.log('firstNumberInLine', firstNumberInLine);

    let row = [];

    for (let i = 0; i < size; i++) {
      let itemInRow = firstNumberInLine + i * firstNumberInLine;
      //console.log('itemInRow', itemInRow);
      row.push(itemInRow);
    }

    //console.log(row);
    table.push(row);
  }
  console.log(table.reverse());
  return table.reverse();
};

multiplicationTable(3);
