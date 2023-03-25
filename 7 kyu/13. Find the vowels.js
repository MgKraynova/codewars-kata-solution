// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word) {
  let arrayOfVowels = word.match(/[aeiouy]/gi);
  const result = [];

  if (arrayOfVowels) {
    console.log(arrayOfVowels);
    arrayOfVowels.forEach((vowel) => {
      let index = word.indexOf(vowel);
      result.push(index + 1);
      word = word.replace(vowel, ' ');
    });
    console.log(result);
    return result;
  }
  return result;
}

// vowelIndices('Mmmm');
// vowelIndices('Superu');
// console.log(vowelIndices('Super'));

// console.log(vowelIndices('supercalifragilisticexpialidocious'));

// console.log('kgEgAvUMiItMlZMZlMMgrrBYRcgDqnDsppO'[23]);
