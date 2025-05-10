// https://leetcode.com/problems/roman-to-integer/description/

var romanToInt = function (s) {
    const NUMBERS = new Map([
            ['I', 1],
            ['IV', 4],
            ['V', 5],
            ['IX', 9],
            ['X', 10],
            ['XL', 40],
            ['L', 50],
            ['XC', 90],
            ['C', 100],
            ['CD', 400],
            ['D', 500],
            ['CM', 900],
            ['M', 1000]
        ]
    );

    let stringToCheck = s;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        const current = stringToCheck[i];
        const hasPrev = i > 0;
        const prev = stringToCheck[i - 1];

        const joint = prev + current;
        if (hasPrev && NUMBERS.has(joint)) {
            res = res - NUMBERS.get(prev) + NUMBERS.get(joint);
        } else {
            res = res + NUMBERS.get(current)
        }
    }
    return res
};


// лучше первого
var romanToIntSecond = function (s) {
    const NUMBERS = new Map([
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000]
        ]
    );

    const arrayOfSymbols = s.split('');

    let res = 0;

    arrayOfSymbols.forEach((item, index) => {
        const prevItem = arrayOfSymbols[index - 1];
        const is4or9 = prevItem === 'I' && ['V', 'X'].includes(item);
        const is40or90 = prevItem === 'X' && ['L', 'C'].includes(item);
        const is400or900 = prevItem === 'C' && ['D', 'M'].includes(item);

        const shouldSubtract = is4or9 || is40or90 || is400or900;
        if (prevItem && shouldSubtract) {
            res = res + NUMBERS.get(item) - 2 * NUMBERS.get(prevItem)
        } else if (NUMBERS.has(item)) {
            res += NUMBERS.get(item);
        }
    })

    return res;
};

var romanToIntThird = function (s) {
    const NUMBERS = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    const arrayOfSymbols = s.split('');
    let res = 0;

    arrayOfSymbols.forEach((item, index) => {
        const prevItem = arrayOfSymbols[index - 1];
        const is4or9 = prevItem === 'I' && ['V', 'X'].includes(item);
        const is40or90 = prevItem === 'X' && ['L', 'C'].includes(item);
        const is400or900 = prevItem === 'C' && ['D', 'M'].includes(item);

        const shouldSubtract = is4or9 || is40or90 || is400or900;

        res = res + NUMBERS[item];

        if (prevItem && shouldSubtract) {
            res = res - 2 * NUMBERS[prevItem];
        }
    });

    return res;
};

// лучшее
var romanToIntForth = function (s) {
    const NUMBERS = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let res = 0;

    let index = 0;
    while (index < s.length) {
        const item = s[index];
        const prevItem = s[index - 1];
        const is4or9 = prevItem === 'I' && ['V', 'X'].includes(item);
        const is40or90 = prevItem === 'X' && ['L', 'C'].includes(item);
        const is400or900 = prevItem === 'C' && ['D', 'M'].includes(item);

        const shouldSubtract = is4or9 || is40or90 || is400or900;

        res = res + NUMBERS[item];

        if (prevItem && shouldSubtract) {
            res = res - 2 * NUMBERS[prevItem];
        }
        index++
    }

    return res;
};

//console.log('expected', 3, 'actual', romanToInt('III'));
//console.log('expected', 58, 'actual', romanToInt('LVIII'))
//console.log('expected', 994, 'actual', romanToInt('CMXCIV'))

//console.log('expected', 1994, 'actual', romanToInt('MCMXCIV'))


// console.log('expected', 3, 'actual', romanToIntSecond('III'));
//  console.log('expected', 58, 'actual', romanToIntSecond('LVIII'))
//  console.log('expected', 994, 'actual', romanToIntSecond('CMXCIV'))
 console.log('expected', 1994, 'actual', romanToIntForth('MCMXCIV'))

//console.log('expected', 621, 'actual', romanToIntSecond('DCXXI'))
