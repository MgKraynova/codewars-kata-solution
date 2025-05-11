// https://leetcode.com/problems/move-zeroes/

// хуже
var moveZeroes = function (nums) {
    if (!nums.includes(0)) {
        return nums;
    }

    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && nums[leftPointer] !== 0) {
            leftPointer++
        }

        if (nums[leftPointer] === 0) {
            nums.splice(leftPointer, 1);
            nums.push(0);
            rightPointer--;
        }
    }

    return nums
};

// лучше
var moveZeroesSecond = function (nums) {
    if (!nums.includes(0)) {
        return nums;
    }

    let leftPointer = 0;
    let rightPointer = 0;

    while (rightPointer < nums.length) {
        if (nums[rightPointer] > 0) {
            [nums[leftPointer], nums[rightPointer]] = [nums[rightPointer], nums[leftPointer]]
            leftPointer++
        }
        rightPointer++
    }

    return nums
};


console.log(moveZeroesSecond([0, 1, 0, 3, 12])) // [1,3,12,0,0]
console.log(moveZeroesSecond([0, 0, 1])) // [1,0,0]
