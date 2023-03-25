// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22.
// The highest is 26.
// solve("zodiacs") = 26
//
// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and
// "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {
  const stringWithoutVowels = s.replace(/[aeiou]+/g, ' ');

  const arrayOfSubstrings = stringWithoutVowels.split(' ');

  let theBiggestValue = 0;

  arrayOfSubstrings.forEach((substring) => {
    let substringValue = 0;

    for (let letter of substring) {
      substringValue += letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    if (substringValue > theBiggestValue) {
      theBiggestValue = substringValue;
    }
  });
  console.log(theBiggestValue);

  return theBiggestValue;
}
solve('zodiacs');
solve('twelfthstreet');
// Test.assertEquals(solve("zodiac"),26);
// Test.assertEquals(solve("chruschtschov"),80);
// Test.assertEquals(solve("khrushchev"),38);
// Test.assertEquals(solve("strength"),57);
// Test.assertEquals(solve("catchphrase"),73);
// Test.assertEquals(solve("twelfthstreet"),103);
// Test.assertEquals(solve("mischtschenkoana"),80);
