// https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

function landPerimeter(arr) {
    const LAND_SYMBOL = 'X';
    const LENGTH_OF_ONE_SIDE = 1;
    let totalLandPerimeter = 0;

    arr.forEach((item, itemIndex) => {
        for (let i = 0; i < item.length; i++) {
            if (item[i] === 'X') {
                let leftSide;
                let topSide;
                let bottomSide;
                let rightSide;

                const topLine = arr[itemIndex - 1];
                const bottomLine = arr[itemIndex + 1];

                const symbolOnTheLeftSide = item[i - 1];
                const symbolOnTheRightSide = item[i + 1];

                // проверяем, есть ли Х сверху
                if (topLine && topLine[i] === LAND_SYMBOL) {
                    topSide = 0;
                } else {
                    topSide = LENGTH_OF_ONE_SIDE;
                }

                // проверяем, есть ли X снизу
                if (bottomLine && bottomLine[i] === LAND_SYMBOL) {
                    bottomSide = 0;
                } else {
                    bottomSide = LENGTH_OF_ONE_SIDE;
                }

                // Проверяем, есть ли Х слева
                if (symbolOnTheLeftSide && symbolOnTheLeftSide === LAND_SYMBOL) {
                    leftSide = 0;
                } else {
                    leftSide = LENGTH_OF_ONE_SIDE;
                }

                // Проверяем, есть ли Х справа
                if (symbolOnTheRightSide && symbolOnTheRightSide === LAND_SYMBOL) {
                    rightSide = 0;
                } else {
                    rightSide = LENGTH_OF_ONE_SIDE;
                }

                const perimeterOfX = leftSide + rightSide + topSide + bottomSide;

                totalLandPerimeter = totalLandPerimeter + perimeterOfX;
            }
        }
    })

    return `Total land perimeter: ${totalLandPerimeter}`;
}

console.log('1', landPerimeter([
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
]));