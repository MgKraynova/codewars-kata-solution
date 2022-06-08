// https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript

Array.prototype.numberOfOccurrences = function(element) {
    let result = 0;

    this.forEach((item) => {
        if (item === element) {
            result++;
        }
    })

    return result;
}

let arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0); //=== 1;
arr.numberOfOccurrences(4); //=== 0;
arr.numberOfOccurrences(2); //=== 2;
arr.numberOfOccurrences("a"); //=== 0;