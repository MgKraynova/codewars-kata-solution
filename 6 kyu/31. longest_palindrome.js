// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

function longestPalindrome(s) {
  if (s.length === 0) {
    return 0;
  }

  let longest = 0;

  [...s].forEach((item, index) => {
    for (let i = index + 1; i <= s.length; i++) {
      let substring = s.slice(index, i);

      if (substring === [...substring].reverse().join('')) {
        substring.length > longest && (longest = substring.length);
      }
    }
  });

  return longest;
}

// longestPalindrome("zzbaabcd"); // 4
// longestPalindrome("abcde"); // 1
//longestPalindrome('I like racecars that go fast'); // 7
longestPalindrome('baa');
