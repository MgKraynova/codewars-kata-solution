// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript


function foldArray(array, runs) {

    let arrayForChange = array;

    for (let i = 0; i < runs; i++) {
        if (arrayForChange.length === 1) {
            break;
        } else if (arrayForChange.length % 2 === 0) {
            const indexOfLastElementOfNewArray = arrayForChange.length / 2 - 1;
            arrayForChange = arrayForChange.map((item, index) => {
                if (index > indexOfLastElementOfNewArray) {
                    return;
                } else {
                    return item + arrayForChange[arrayForChange.length - 1 - index];
                }
            }).slice(0, indexOfLastElementOfNewArray + 1);
        } else {
            const indexOfCentralElementOfArray = Math.floor(arrayForChange.length / 2);
            arrayForChange = arrayForChange.map((item, index) => {
                if (index > indexOfCentralElementOfArray) {
                    return;
                } else if (index === indexOfCentralElementOfArray) {
                    return item;
                } else {
                    return item + arrayForChange[arrayForChange.length - 1 - index];
                }
            }).slice(0, indexOfCentralElementOfArray + 1);
        }
    }

    return arrayForChange;
}

//foldArray([1,2,3,4,5], 1); // [6,6,3]
//foldArray([1,2,3,4,5], 2); // [9,6]
//foldArray([1,2,3,4,5], 3);
//foldArray([ -9, 9, -8, 8, 66, 23 ], 1); // [ 14, 75, 0 ]
foldArray([1, 2, 3, 4, 5, 99, 88, 78, 74, 73], 5);
// //foldArray([
// -144, 62, -168, -46, 143, 24, 177, 127, 195, 142,
//     -106, -115, -123, -116, -17, 74, -65, -136, -136, -55,
//     70, 180, -133, -77, -172, 194, -133, -132, -182, 30,
//     -12, 143, -145, 20, -85, -191, 29, 4, -61, -162,
//     -76, 43, -93, -132, -99, -158, -18, 92, -90, 148,
//     42, 48, -60, 22, 65, 145, 161, 77, 61, -60,
//     -75, -104, 178, 79, 48, -187, -33, 90, -61, -102,
//     190, -145, -128, 81, -56, 129, -168, -90, -164, 0,
//     31, -176, -134, 159, -80, -11, -105, -34
// ],
// 7
// )
// ; // [ -861 ]