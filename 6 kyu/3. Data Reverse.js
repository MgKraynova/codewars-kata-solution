// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

function dataReverse(data) {
  let arrayOfBytes = [];

  for (let i = 0; i < data.length / 8; i++) {
    let byte = data.slice(i * 8, (i + 1) * 8);
    // console.log(byte);
    arrayOfBytes.push(byte);
  }

  const reversedArrayOfBytes = arrayOfBytes.reverse();
  // console.log(reversedArrayOfBytes);

  let finalArray = [];

  reversedArrayOfBytes.forEach((byte) => {
    byte.forEach((number) => {
      finalArray.push(number);
    });
  });

  console.log(finalArray);
}

dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]);
