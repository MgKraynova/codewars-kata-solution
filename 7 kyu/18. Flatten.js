// https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript

var flatten = function (array){
    return [].concat(...array);
}

flatten([[1,2,3],["a","b","c"],[1,2,3]]);

flatten([[[1,2,3]]]);