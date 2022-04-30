// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
    let arrayOfLetters = s.split('');

    let newString = '';

    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (arrayOfLetters[i] === '#') {
            newString = newString.slice(0, -1);
        } else {
            newString = newString.concat(arrayOfLetters[i]);
        }
    }

    return newString;
}

cleanString("abc#d##c" ) // "ac"

