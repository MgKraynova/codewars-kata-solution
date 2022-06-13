// https://www.codewars.com/kata/559536379512a64472000053/train/javascript

function playPass(string, number) {

    const regexLetter = /[a-z]/i;
    const regexNumber = /\d/;

    return [...string].map((item, index) => {
        if (regexLetter.test(item)) {
            let itemNumberInAlphabet = item.toLowerCase().charCodeAt(0);

            if (itemNumberInAlphabet + number > 122) {
                itemNumberInAlphabet = itemNumberInAlphabet - 26;
            }

            return (index % 2 === 0)
                ? String.fromCharCode(itemNumberInAlphabet + number).toUpperCase()
                : String.fromCharCode(itemNumberInAlphabet + number).toLowerCase();
        } else if (regexNumber.test(item)) {
            return 9 - item;
        } else {
            return item;
        }
    }).reverse().join('');
}

//playPass('Ab', 2);

//console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2));
//console.log(playPass('BORN IN 2015!'));
//console.log(playPass('z'));