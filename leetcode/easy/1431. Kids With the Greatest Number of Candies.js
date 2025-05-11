// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    console.log('max', maxCandies)
    return candies.map((item) => {
        const newNumberOfCandies = item + extraCandies;
        return newNumberOfCandies >= maxCandies;
    })
};

console.log(kidsWithCandies([2,3,5,1,3], 3))