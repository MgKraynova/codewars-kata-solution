// https://leetcode.com/problems/maximum-average-subarray-i/description/

// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value
// and return this value. Any answer with a calculation error less than 10-5 will be accepted.
//
//     Example 1:
//
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:
//
// Input: nums = [5], k = 1
// Output: 5.00000

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Первое решение 2648 ms Beats 5.03%
// Текущая сложность алгоритма — O(n * k)
var findMaxAverage = function (nums, k) {
    if (k <= 0) {
        return 0;
    }

    let left = 0;
    let right = k;
    let sum = 0;
    let maxAverage = 0;

    // Первый цикл — суммирует первые k элементов → O(k)
    for (let i = left; i < right; i++) {
        sum += nums[i];
    }

    maxAverage = sum / k;
    sum = 0;

    // n - k
    while (right < nums.length) {
        left += 1;
        right += 1;

        // O(k)
        for (let i = left; i < right; i++) {
            sum += nums[i];
        }

        maxAverage = Math.max(maxAverage, sum / k);
        sum = 0;
    }

    return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([0, 4, 0, 3, 2], 1)); // 4

// Второе решение
// Runtime 3 ms Beats 51.48%
// сложность O(n)
var findMaxAverage2 = function (nums, k) {
    if (k <= 0) {
        return 0;
    }

    let left = 0;
    let right = k;
    let sum = 0;
    let maxAverage = 0;

    // O(k)
    for (let i = left; i < right; i++) {
        sum += nums[i];
    }

    maxAverage = sum / k;

    // Здесь нет вложенного цикла, то есть 1 итерация = O(1)
    // И таких итераций — приблизительно n - k
    while (right < nums.length) {
        sum = sum - nums[left] + nums[right];

        right += 1;
        left += 1;

        maxAverage = Math.max(maxAverage, sum / k);
    }

    return maxAverage
};

console.log(findMaxAverage2([0, 4, 0, 3, 2], 1)); // 4
