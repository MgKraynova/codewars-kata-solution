// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
    let array = [];

    for (let i = 0; i < n; i++) {
        let x = [1];

        for (let y = 0; y < i; y++) {
            x.push(1);
        }

        array.push(x);
    }

    console.log(array);
    return array;
}

pyramid(0); // => [ ]
pyramid(1); // => [ [1] ]
pyramid(2); // => [ [1], [1, 1] ]
pyramid(3); // => [ [1], [1, 1], [1, 1, 1] ]