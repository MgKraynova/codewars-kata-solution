// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

function bump(x) {
  let arrayOfLetters = x.split('');

  let numberOfBumps = 0;

  arrayOfLetters.forEach((letter) => {
    if (letter === 'n') {
      numberOfBumps = numberOfBumps + 1;
    }
  });

  if (numberOfBumps <= 15) {
    console.log('Woohoo!');
    return 'Woohoo!';
  } else {
    console.log('Car Dead');
    return 'Car Dead';
  }
}

bump('_nnnnnnn_n__n______nn__nn_nnn');
