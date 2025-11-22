// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/?envType=problem-list-v2&envId=sliding-window

// A string is good if there are no repeated characters.
//
//     Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
//
//     Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
//
//     A substring is a contiguous sequence of characters in a string.

// Runtime 1 ms Beats 76.11%
// O(n)
var countGoodSubstrings = function (s) {
    const LENGTH = 3;
    let right = LENGTH - 1;
    let numberOfSubstrings = 0;

    const characters = [];

    let badString = false;

    for (let i = 0; i < s.length; i++) {
        if (characters.includes(s[i])) {
            badString = true;
        }

        characters.push(s[i]);


        if (i === right) {
            numberOfSubstrings = badString ? numberOfSubstrings : numberOfSubstrings + 1;
            right += 1;
            characters.shift();
            badString = characters[0] === characters[1];
        }
    }

    return numberOfSubstrings;
};

// Input: s = "xyzzaz"
// Output: 1

//countGoodSubstrings('xyzzaz')
countGoodSubstrings("aababcabc") // 4

// 0 ms Beats 100.00%
var countGoodSubstrings2 = function (s) {
    const substringLength = 3;
    const indexOfLastLetterToCheck = s.length - substringLength;

    let result = 0;

    for (let i = 0; i <= indexOfLastLetterToCheck; i++) {
        const first = s[i];
        const second = s[i + 1];
        const third = s[i + 2];

        const isGoodString = !(first === second || first === third || second === third);

        if (isGoodString) {
            result += 1;
        }
    }

    return result;
};

countGoodSubstrings2("aababcabc") // 4
