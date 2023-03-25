// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

function adjacentElementsProduct(array) {
  return array
    .map((current, currentIndex) => {
      if (currentIndex === 0) {
        return;
      }
      return current * array[currentIndex - 1];
    })
    .sort((a, b) => {
      return a - b;
    })[array.length - 2];
}
// adjacentElementsProduct([1, 2, 3]); //==> return 6
//
// adjacentElementsProduct([5, 2, 3]); //==> return

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]);
