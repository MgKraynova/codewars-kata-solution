// https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript

function keysAndValues(data){

    const arrOfKeys = [];
    const arrOfValues = [];

    for (let key in data) {
        arrOfKeys.push(key);
        arrOfValues.push(data[key]);
    }

    return [arrOfKeys, arrOfValues];
}

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
