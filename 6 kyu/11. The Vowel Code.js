// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

function encode(string) {
  return Array.from(string)
    .map((letter) => {
      switch (letter) {
        case 'a':
          return '1';
        case 'e':
          return '2';
        case 'i':
          return '3';
        case 'o':
          return '4';
        case 'u':
          return '5';
        default:
          return letter;
      }
    })
    .join('');
}

function decode(string) {
  return Array.from(string)
    .map((letter) => {
      switch (letter) {
        case '1':
          return 'a';
        case '2':
          return 'e';
        case '3':
          return 'i';
        case '4':
          return 'o';
        case '5':
          return 'u';
        default:
          return letter;
      }
    })
    .join('');
}

//encode("hello");

console.log(decode('h2ll0'));
