// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  const ALPHABET = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const LAST_INDEX_OF_ALPHABET = ALPHABET.length - 1;
  const ROT_13_SHIFT = 13;

  return message
    .split('')
    .map((item) => {
      const itemInLowerCase = item.toLowerCase();
      const isItemInLowerCase = item === itemInLowerCase;
      const indexOfItemInAlphabet = ALPHABET.indexOf(itemInLowerCase);

      if (indexOfItemInAlphabet < 0) {
        return item;
      }

      const indexOfCipheredItem = indexOfItemInAlphabet + ROT_13_SHIFT;
      const resultItem =
        indexOfCipheredItem > LAST_INDEX_OF_ALPHABET
          ? ALPHABET[indexOfCipheredItem - LAST_INDEX_OF_ALPHABET - 1]
          : ALPHABET[indexOfCipheredItem];

      return isItemInLowerCase ? resultItem : resultItem.toUpperCase();
    })
    .join('');
}

console.log(rot13('Test'));
