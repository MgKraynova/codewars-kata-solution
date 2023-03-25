// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
  const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

  if (nbPetals % phrases.length === 0) {
    return phrases[phrases.length - 1];
  } else {
    return phrases[(nbPetals % phrases.length) - 1];
  }
}

//howMuchILoveYou(7);
//howMuchILoveYou(357);
howMuchILoveYou(3);
