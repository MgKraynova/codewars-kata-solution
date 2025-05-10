// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const firstNumber = nums[i];
        for (let k = i + 1; k < nums.length; k++) {
            const secondNumber = nums[k];

            const sum = firstNumber + secondNumber;

            if (sum === target) {
                return [i, k]
            }
        }
    }
};

var twoSumSecondVariant = function (nums, target) {
    const collection = new Map();
    for (let i = 0; i < nums.length; i++) {
        collection.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const delta = target - nums[i];


        if (collection.has(delta) && collection.get(delta) !== i) {
            return [i, collection.get(delta)];
        }
    }
};

console.log('1', twoSum([2, 5, 5, 11], 10)); // [1,2]
console.log('2', twoSumSecondVariant([2, 5, 5, 11], 10)); // [1,2]
console.log('3', twoSumSecondVariant([3, 2, 4], 6)); // [1,2]
