// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript

function solution(pairs){

    let string = '';

    for (let key in pairs) {
        console.log(key);

        string = string.concat(key).concat(' = ').concat(pairs[key]).concat(',');
    }

    string = string.slice(0, string.length - 1)
    console.log(string);
}

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
