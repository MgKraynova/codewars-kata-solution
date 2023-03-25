// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript

function explode(s) {
  let result = '';

  [...s].forEach((item) => {
    for (let i = 1; i <= parseInt(item); i++) {
      result = result.concat(item);
    }
  });

  return result;
}

explode('312'); // "333122"
