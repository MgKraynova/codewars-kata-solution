// https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

function addLetters(...letters) {

    if (letters.length === 0) {
        return 'z';
    }

    let resultNumber = 0;
    let resultLetter = '';

    letters.forEach((item) => {
        resultNumber += item.charCodeAt(0) - 96;
    })

    if (resultNumber > 26) {
        resultNumber % 26 === 0
            ? resultLetter = String.fromCharCode(resultNumber - ((Math.floor(resultNumber / 26) - 1) * 26) + 96)
            : resultLetter = String.fromCharCode(resultNumber - (Math.floor(resultNumber / 26) * 26) + 96)
    } else {
        resultLetter = String.fromCharCode(resultNumber + 96);
    }

    return resultLetter;
}

//addLetters('a', 'b', 'c'); // = 'f'
//addLetters('a', 'b'); // = 'c'
addLetters('z'); // = 'z'
//addLetters('z', 'a'); // = 'a'
//addLetters('y', 'c', 'b'); // = 'd' // notice the letters overflowing
// addLetters(); // = 'z'

//addLetters("p", "m", "d", "n", "i", "u", "x", "d", "x");

addLetters("t", "f", "c", "z", "e", "d", "q", "b", "k", "j"); // z