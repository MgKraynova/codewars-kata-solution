// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

function sumOfN(n) {
    const arr = [0];

    for (let i = 1; i <= Math.abs(n); i++) {
        n > 0
            ? arr.push(arr[arr.length - 1] + i)
            : arr.push(arr[arr.length - 1] - i)
    }

    return arr;
}

sumOfN(-4);
sumOfN(4);