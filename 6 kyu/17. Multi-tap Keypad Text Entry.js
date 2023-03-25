// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

function presses(phrase) {
  const buttons = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '*', ' 0', '#'];

  const lettersInPhrase = phrase.toUpperCase().split('');

  let total = 0;

  lettersInPhrase.forEach((letter) => {
    buttons.forEach((button) => {
      if (button.includes(letter)) {
        total = total + 1 + button.indexOf(letter);
      }
    });
  });

  return total;
}

presses('WHERE DO U WANT 2 MEET L8R'); // 47
presses('LOL'); // 9

presses('HOW R U'); // 13
