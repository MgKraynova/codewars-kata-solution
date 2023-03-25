// https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, arr.length - 1);
}

function last(arr) {
  return arr[arr.length - 1];
}

tail([1, 2, 3, 4, 5]);
init([1, 2, 3, 4, 5]);
