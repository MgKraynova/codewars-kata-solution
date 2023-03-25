// https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/javascript

function Xbonacci(signature, n) {
  const resultArr = [...signature];
  const step = signature.length;

  if (step >= n) {
    return signature.slice(signature.length - step, n);
  }

  for (let i = 0; i < n - step; i++) {
    const newElement = resultArr.slice(resultArr.length - step, resultArr.length).reduce((prev, curr) => {
      return prev + curr;
    });
    resultArr.push(newElement);
  }

  return resultArr;
}

//Xbonacci([1, 2, 3, 4, 5], 4);
//Xbonacci([1, 1, 1, 1], 10);
//Xbonacci([0,0,0,0,1], 10);
//Xbonacci([1, 0, 0, 0, 0, 0, 1], 10);

//Xbonacci([9, 18, 1, 17, 2, 4, 1], 5);
//Xbonacci([15, 5, 4, 5, 18, 11, 20, 20, 20, 4, 6, 17, 9, 8, 15, 3, 0, 5, 12], 2);
//Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0);
//console.log([])
Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9);
