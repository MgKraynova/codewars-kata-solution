// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    const xInString = x.toString();
    const arrayOfSymbols = xInString.split('');

    const reversedArray = [...arrayOfSymbols].reverse();

    return arrayOfSymbols.every((item, index) => {
        return item === reversedArray[index];
    })
};

// хуже первого варианта
var isPalindromeSecondVariant = function (x) {
    if (x < 0) {
        return false;
    }

    const xInString = x.toString();
    const reversedString = xInString.split('').reverse().join('');

    for (let i = 0; i < xInString.length; i++) {
        if (xInString[i] !== reversedString[i]) {
            return false
        }
    }

    return true
};

// хуже первого варианта
var isPalindromeThirdVariant = function (x) {
    const xInString = x.toString();
    const reversedString = xInString.split('').reverse().join('');

    return xInString === reversedString;
};
// console.log('expected', false, 'actual', isPalindrome(10));
// console.log('expected', true, 'actual', isPalindrome(101));
// console.log('expected', false, 'actual', isPalindrome(100));

console.log('expected', false, 'actual', isPalindromeSecondVariant(10));
console.log('expected', true, 'actual', isPalindromeSecondVariant(101));
console.log('expected', false, 'actual', isPalindromeSecondVariant(100));