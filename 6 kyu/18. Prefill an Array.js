// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
//     if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError

function prefill(n, v) {
    if (n === 0 || parseFloat(n) === 0) {
        return [];
    }

    if (!Number.isInteger(n) || isNaN(parseFloat(n)) || !Number.isInteger(parseFloat(n)) || (typeof n === "number" && n < 0)) {
        throw new TypeError(`${n} is invalid`);
    }

    const array = [];

    for (let i = 0; i < n; i++) {
        array.push(v);
    }

    console.log(array);
    return array;
}

prefill('0',"abc");