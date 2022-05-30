// https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to
// 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

function calc(expr) {
    if (expr.length === 0) {
        return 0;
    }


    let stek = [];

    let lastItemInStekIsPoint = false;
    let previousItemIsNumber = false;


    [...expr].forEach((item) => {
        if (item === '.') {
            stek[stek.length - 1] = stek[stek.length - 1].concat(item);
            lastItemInStekIsPoint = true;
        } else if (lastItemInStekIsPoint) {
            stek[stek.length - 1] = stek[stek.length - 1].concat(item);
            lastItemInStekIsPoint = false;
        } else if (item === ' ') {
            previousItemIsNumber = false;
        } else if (previousItemIsNumber) {
            stek[stek.length - 1] = stek[stek.length - 1].concat(item);
        } else if (!(item === ' ') && !(item === '/') && !(item === '+') && !(item === '-') && !(item === '*')) {
            stek.push(item);
            previousItemIsNumber = true;
        } else if (item === '+') {
            const sumResult = parseFloat(stek[stek.length - 1]) + parseFloat(stek[stek.length - 2]);
            stek.splice(stek.length - 2, 2, sumResult.toString());
        } else if (item === '-') {
            const subtractionResult = parseFloat(stek[stek.length - 2]) - parseFloat(stek[stek.length - 1]);
            stek.splice(stek.length - 2, 2, subtractionResult.toString());
        } else if (item === '*') {
            const multiplicationResult = parseFloat(stek[stek.length - 1]) * parseFloat(stek[stek.length - 2]);
            stek.splice(stek.length - 2, 2, multiplicationResult.toString());
        } else if (item === '/') {
            const divisionResult = parseFloat(stek[stek.length - 2]) / parseFloat(stek[stek.length - 1]);
            stek.splice(stek.length - 2, 2, divisionResult.toString());
        }
    })

    if (stek.length === 1) {
        return parseFloat(stek[0]);
    }
}

calc('4 2 /');
calc('3.5');
calc('1 3 +');
calc("1 3 *");
calc('5 1 2 + 4 * + 3 -');
calc("1 3 -");
calc('10 2 +');

// Test.assertEquals(calc(""), 0, "Should work with empty string");
// Test.assertEquals(calc("3"), 3, "Should parse numbers");
// Test.assertEquals(calc("3.5"), 3.5, "Should parse float numbers");
// Test.assertEquals(calc("1 3 +"), 4, "Should support addition");
// Test.assertEquals(calc("1 3 *"), 3, "Should support multiplication");
// Test.assertEquals(calc("1 3 -"), -2, "Should support subtraction");
// Test.assertEquals(calc("4 2 /"), 2, "Should support division");

