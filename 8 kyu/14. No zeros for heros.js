// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
  return n !== 0 && n % 10 === 0 ? Number(n.toString().replace(/0*$/, '')) : n;
}

console.log(noBoringZeros(96000));
