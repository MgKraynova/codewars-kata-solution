// https://leetcode.com/problems/greatest-common-divisor-of-strings

var gcdOfStrings = function (str1, str2) {
    let shortestString = '';
    let longestString = '';
    if (str1.length > str2.length) {
        shortestString = str2;
        longestString = str1;
    } else {
        shortestString = str1;
        longestString = str2;
    }

    let divider = shortestString;

    for (let i = 0; i < shortestString.length; i++) {
        if (longestString.split(divider).join('').length === 0
            && shortestString.split(divider).join('').length === 0) {
            return divider
        } else {
            divider = divider.slice(0, -1);
        }
    }

    return ''
};

// лучшее по сложности алгоритма и рантайму
var gcdOfStringsSecond = function (str1, str2) {
    const shortest = str1.length > str2.length ? str2 : str1;
    const longest = str1.length > str2.length ? str1 : str2;

    if (!longest.includes(shortest)) {
        return ''
    }

    for (let i = shortest.length; i > 0; i--) {
        if (shortest.length % i === 0 && longest.length % i === 0) {
            const divider = shortest.slice(0, i);
            const countOfDividerInLongestString = longest.length / i;
            const isCorrectDivider = divider.repeat(countOfDividerInLongestString) === longest;
            if (isCorrectDivider) {
                return shortest.slice(0, i);
            }
        }
    }

    return '';
};

//console.log(gcdOfStringsSecond('ABCABC', 'ABC')) // ABC
// console.log(gcdOfStrings('LEET', 'CODE')) // ''
// console.log(gcdOfStringsSecond('ABCDEF', 'ABC')) // ''
//console.log(gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX')) // 'TAUXX'

// console.log(gcdOfStringsSecond('ABABABAB', 'ABAB')) // ABAB
console.log(gcdOfStringsSecond('ABABAB', 'ABAB')) // AB
// console.log('ABCABC'.split('ABC').join('').length)
//
// console.log('ABABABAB'.split('ABAB').join('').length)
//console.log(gcdOfStringsSecond('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX')) // TAUXX