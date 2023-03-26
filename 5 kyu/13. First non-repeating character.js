// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  let nonRepeatLetter;

  const arrayOfCharacters = s.split('');

  for (let i = 0; i < s.length; i++) {
    const allRepeatedCharacters = arrayOfCharacters.filter(
      (item) =>
        item === s[i] || item === s[i].toUpperCase() || item === s[i].toLowerCase()
    );

    if (allRepeatedCharacters.length === 1) {
      nonRepeatLetter = s[i];
      break;
    }
  }

  return nonRepeatLetter ? nonRepeatLetter : '';
}

firstNonRepeatingLetter('abba');
