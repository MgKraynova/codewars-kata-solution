// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

function elevator(left, right, call) {
  return Math.abs(call - left) >= Math.abs(call - right) ? 'right' : 'left';
}
