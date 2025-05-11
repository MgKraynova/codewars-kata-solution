// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

// очень долго из-за reverse 178ms
var reverseVowels = function (s) {
    const vowelsInEnglish = ['a', 'e', 'i', 'o', 'u'];

    let newString = '';

    const regex = /a|e|i|o|u/gi;
    const vowelsInString = s.match(regex);

    if (!vowelsInString) {
        return s;
    }

    const reversedVowels = vowelsInString.reverse();

    for (let i = 0; i < s.length; i++) {
        if (vowelsInEnglish.includes(s[i].toLowerCase())) {
            newString = newString + reversedVowels[0];
            reversedVowels.shift();
        } else {
            newString = newString + s[i];
        }

    }

    return newString;
};

// 9ms
var reverseVowelsSecond = function (s) {
    const vowelsInEnglish = ['a', 'e', 'i', 'o', 'u'];

    let newString = '';

    const regex = /a|e|i|o|u/gi;
    const vowelsInString = s.match(regex);

    if (!vowelsInString) {
        return s;
    }

    for (let i = 0; i < s.length; i++) {
        if (vowelsInEnglish.includes(s[i].toLowerCase())) {
            newString = newString + vowelsInString[vowelsInString.length - 1];
            vowelsInString.pop();
        } else {
            newString = newString + s[i];
        }
    }

    return newString
};

var reverseVowelsThird = function (s) {
    const vowelsInEnglish = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const arrayOfSymbols = s.split('');

    let leftCursor = 0;
    let rightCursor = s.length - 1;

    while (leftCursor < rightCursor) {
        while (leftCursor < rightCursor && !vowelsInEnglish.includes(arrayOfSymbols[leftCursor])) {
            leftCursor++
        }

        while (leftCursor < rightCursor && !vowelsInEnglish.includes(arrayOfSymbols[rightCursor])) {
            rightCursor--
        }

        const leftSymbol = arrayOfSymbols[leftCursor];
        const rightSymbol = arrayOfSymbols[rightCursor];

        arrayOfSymbols[leftCursor] = rightSymbol;
        arrayOfSymbols[rightCursor] = leftSymbol;

        leftCursor++;
        rightCursor--;
    }

    return arrayOfSymbols.join('')
};

//console.log(reverseVowelsThird('IceCreAm')) // AceCreIm
console.log(reverseVowelsThird('leetcode')) // leotcede