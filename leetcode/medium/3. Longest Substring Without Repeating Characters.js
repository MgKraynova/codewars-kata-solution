// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
    const arrayOfSymbols = s.split('');
    let currentMaxSubstring = '';
    const allMaxes = [0];

    for (let i = 0; i < arrayOfSymbols.length; i++) {
        if (currentMaxSubstring.includes(arrayOfSymbols[i])) {
            allMaxes.push(currentMaxSubstring.length);

            const indexOfCurrentSymbolInSubstring = currentMaxSubstring.indexOf(arrayOfSymbols[i]);

            currentMaxSubstring = currentMaxSubstring.slice(indexOfCurrentSymbolInSubstring + 1);

        } else {
            currentMaxSubstring = currentMaxSubstring.concat(arrayOfSymbols[i]);
        }

    }

    allMaxes.push(currentMaxSubstring.length);


    return Math.max(...allMaxes)
};

// console.log('expected', 3, 'actual', lengthOfLongestSubstring('abcabcbb'))
// console.log('expected', 1, 'actual', lengthOfLongestSubstring('bbbb'))
// console.log('expected', 3, 'actual', lengthOfLongestSubstring('pwwkew'))
// console.log('expected', 0, 'actual', lengthOfLongestSubstring(''))
// console.log('expected', 1, 'actual', lengthOfLongestSubstring(' '))

// console.log('expected', 3, 'actual', lengthOfLongestSubstring('dvdf'))
// console.log('expected', 4, 'actual', lengthOfLongestSubstring('dvedf'))
//  console.log('expected', 2, 'actual', lengthOfLongestSubstring('ppwwkk'))

console.log('expected', 3, 'actual', lengthOfLongestSubstring('aabaab!bb'))


const a = 'ab'.indexOf('a');
const b = 'aba'.slice(a + 1);
const d = 'pww';
const c = d.slice(1 + 1);

console.log('1', b)