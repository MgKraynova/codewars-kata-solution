// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

function sumTriangularNumbers(n) {
  if (n <= 0) {
    return 0;
  }

  return (n * (n + 1) * (n + 2)) / 6;
}

sumTriangularNumbers(4);
