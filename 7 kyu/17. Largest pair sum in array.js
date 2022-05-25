// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum (numbers) {
    let largestSum = Math.min(...numbers);

    numbers.forEach((number, index) => {
        for (let i = 0; i < numbers.length; i++) {
            if (!(index === i) && number + numbers[i] > largestSum) {
                largestSum = number + numbers[i];
            }
        }
    })

    console.log(largestSum);
    return largestSum;
}

largestPairSum([10, 14, 2, 23, 19]);
largestPairSum([99, 2, 2, 23, 19]);
largestPairSum([-10, -8, -16, -18, -19]);

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)