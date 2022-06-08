// https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript


function nthFibo(n) {

    let arr = [0, 1];

    for (let i = 1; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    return arr[n - 1];
}

nthFibo(4); // == 2
