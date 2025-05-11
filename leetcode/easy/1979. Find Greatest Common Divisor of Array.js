// https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

var findGCD = function (nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);

    const smallest = sortedNums[0];
    const biggest = sortedNums[sortedNums.length - 1];

    if (biggest % smallest === 0) {
        return smallest;
    }

    for (let i = smallest; i > 0; i--) {
        if (smallest % i === 0 && biggest % i === 0) {
            return i
        }
    }

    return 1;
};
