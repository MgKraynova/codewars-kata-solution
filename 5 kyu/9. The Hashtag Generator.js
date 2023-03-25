// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if (str.length === 0) {
    return false;
  }

  const arrayOfWords = str.split(' ');

  let resultString = '#';

  arrayOfWords.forEach((item) => {
    if (item !== ' ' && item.length > 0) {
      resultString = resultString.concat(item[0].toUpperCase()).concat(item.slice(1));
    }
  });

  return resultString.length > 140 || resultString.length === 1 ? false : resultString;
}

console.log(generateHashtag('    Hello     world   '));
