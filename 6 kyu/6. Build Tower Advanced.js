// https://www.codewars.com/kata/57675f3dedc6f728ee000256/train/javascript

function towerBuilder(nFloors, nBlockSz) {
    const height = nBlockSz[1];
    const width = nBlockSz[0];


    if (nFloors === 0 || nFloors < 0) {
        return {};
    } else {
        // число блоков это 1 + 2 * (nFloors - 1)
        let tower = [];
        let block = '*'.repeat(width);
        let space = ' '.repeat(width);

        for (let i = 1; i <= nFloors; i++) {
            let line = block.repeat(1 + 2 * (i - 1));

            let numberOfSpacesAtOneSide = nFloors - i;
            let spacesAtOneSide = space.repeat(numberOfSpacesAtOneSide);
            let finalLine = spacesAtOneSide + line + spacesAtOneSide;

            for (let i = 1; i <= height; i++) {
                tower.push(finalLine);
            }

        }
        console.log(tower);
    }
}

towerBuilder(3, [2, 3]);