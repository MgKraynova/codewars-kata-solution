// https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript

function amountOfPages(summary) {
  let string = '';
  let numberOfPages = 0;

  for (let i = 1; i <= summary; i++) {
    string = string.concat(i.toString());

    if (string.length === summary) {
      numberOfPages = i;
    }
  }

  return numberOfPages;
}

//amountOfPages(5);
//amountOfPages(25);
amountOfPages(185);
