// https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    const collection = new Map();

    s.split('').forEach((item) => {
        collection.set(item, collection.get(item) + 1 || 1);
    })

    const collection2 = new Map();

    t.split('').forEach((item) => {
        collection2.set(item, collection2.get(item) + 1 || 1);
    })

    for (let [item, _] of collection) {
        if (collection.get(item) !== collection2.get(item)) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('aacc', 'ccac'))
console.log(isAnagram('rat', 'cat'))