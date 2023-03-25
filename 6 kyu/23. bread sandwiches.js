// https://www.codewars.com/kata/622a6a822494ab004b2c68d2/train/javascript

function slicesToName(n) {
  if (n < 2 || !n || isNaN(n)) {
    return null;
  }

  let result = '';

  if (!(n % 2 === 0)) {
    result = 'bread ';
  }

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    result = result.concat('sandwich ');
  }

  console.log(result.slice(0, -1));
  return result;
}

slicesToName(11);

function nameToSlices(name) {
  if (!(typeof name === 'string') || name === '' || !name.includes('sandwich') || name.includes('sandwich bread')) {
    return null;
  }

  let result = 0;
  name.split(' ').forEach((item) => {
    item === 'bread' ? result++ : (result = result + 2);
  });

  return result;
}

nameToSlices('bread sandwich sandwich sandwich');
// have fun!
