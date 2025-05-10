// https://leetcode.com/problems/merge-strings-alternately/description/

var mergeAlternately = function(word1, word2) {
    const longestWord = word1.length > word2.length ? word1 : word2;
    let res = '';

    for (let i = 0; i < longestWord.length; i++) {
        const firstSymbol = word1[i] ?? '';
        const secondSymbol = word2[i] ?? '';
        res = res + firstSymbol + secondSymbol;
    }

    return res;
};

//console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));

