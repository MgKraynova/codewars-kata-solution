// https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function (strs) {
    const copy = [...strs];

    copy.sort((a, b) => a.length - b.length);

    let theLongestPrefix = copy[0];

    copy.forEach((item) => {
        while (!item.startsWith(theLongestPrefix)) {
            theLongestPrefix = theLongestPrefix.slice(0, -1);
        }
    })

    return theLongestPrefix;
};

console.log('expected', 'fl', 'actual', longestCommonPrefix(["flower", "flow", "flight"]));
console.log('expected', '', 'actual', longestCommonPrefix(["dog", "racecar", "car"]));
console.log('expected', '', 'actual', longestCommonPrefix(["reflower", "flow", "flight"]));



