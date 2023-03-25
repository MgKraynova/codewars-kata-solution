// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

function kebabize(str) {
  let result = '';

  [...str].forEach((item) => {
    if (parseInt(item) || item === '0') {
      return;
    } else if (item === item.toUpperCase()) {
      result = result.concat('-' + `${item.toLowerCase()}`);
    } else {
      result = result.concat(item);
    }
  });

  return result[0] === '-' ? result.slice(1) : result;
}

// kebabize('camelsHaveThreeHumps'); // camels-have-three-humps
// kebabize('camelsHave3Humps'); // camels-have-humps
// kebabize('0xiaH');
kebabize('Cpq');
