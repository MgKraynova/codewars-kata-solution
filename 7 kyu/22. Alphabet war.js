// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight) {
  let left = 0;
  let right = 0;

  [...fight].forEach((item) => {
    switch (item) {
      case 'w':
        left += 4;
        break;
      case 'p':
        left += 3;
        break;
      case 'b':
        left += 2;
        break;
      case 's':
        left += 1;
        break;
      case 'm':
        right += 4;
        break;
      case 'q':
        right += 3;
        break;
      case 'd':
        right += 2;
        break;
      case 'z':
        right += 1;
        break;
    }
  });

  if (left === right) {
    return "Let's fight again!";
  }
  return left > right ? 'Left side wins!' : 'Right side wins!';
}
