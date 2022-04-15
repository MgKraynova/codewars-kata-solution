// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n){
    if ((n % 2 === 0) || (n <= 0)) {
        console.log('-');
        return null;
    }

    const diamond = '*';
    const lineBreak = '\n';
    const space = ' ';
    let diam = diamond.repeat(n).concat(lineBreak);

    for (let i = 1; (n - 2 * i) > 0; i++) {

        const numberOfDiamondInLine = n - 2 * i;
        const numberOfSpacesAtTheBeginingOfLine = (n - numberOfDiamondInLine) / 2;

        const lineWithDiamonds = diamond.repeat(numberOfDiamondInLine);
        const lineWithDiamondsAndBreaks = lineWithDiamonds.concat(lineBreak);

        const spacesInLine = space.repeat(numberOfSpacesAtTheBeginingOfLine);
        const finalLine = spacesInLine.concat(lineWithDiamondsAndBreaks);


        diam = finalLine.concat(diam);
        diam = diam.concat(finalLine);
    }

    return diam;
}