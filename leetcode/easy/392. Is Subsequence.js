// https://leetcode.com/problems/is-subsequence/

var isSubsequence = function (s, t) {
    // "abcde"
    //  L
    // "ace"
    //  R

    // "abcde"
    //   L
    // "ace"
    //   R

    // "abcde"
    //    L
    // "ace"
    //    R

    // "abcde"
    //     L
    // "ace"
    //    R

    // "abcde"
    //      L
    // "ace"
    //     R

    if (s.length > t.length) {
        return false;
    }

    let left = 0;
    let right = 0;

    for (let i = 0; i < t.length; i++) {
        if (right > s.length - 1) {
            return true;
        }

        if (s[right] === t[i]) {
            left++
            right++
        } else {
            left++
        }
    }

    return right > s.length - 1
};

console.log(isSubsequence('abc', 'ahbgdc'))