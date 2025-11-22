// https://leetcode.com/problems/defuse-the-bomb/description/?envType=problem-list-v2&envId=sliding-window

// Runtime 0 ms Beats 100.00%
// O(n)
var decrypt = function(code, k) {
    // 0(n)
    if (k === 0) {
        return new Array(code.length).fill(0);
    }

    let resultSum = 0;

    let left = k > 0 ? 1 : code.length - Math.abs(k);
    let right = k > 0 ? k : code.length - 1;

    for (let i = left; i <= right; i++) {
        resultSum += code[i];
    }

    // 0(n)
    return code.map((item, index) => {
        if (index === 0) {
            return resultSum;
        }

        right = right === code.length - 1 ? 0 : right + 1;

        resultSum = resultSum - code[left] + code[right];
        left = left === code.length - 1 ? 0 : left + 1;

        return resultSum
    })
};

// console.log(decrypt([5,7,1,4], 3)) // [12,10,16,13]
console.log(decrypt([2,4,9,3], -2)) // [12,5,6,13]