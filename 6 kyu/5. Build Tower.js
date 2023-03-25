// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
  if (nFloors === 0 || nFloors < 0) {
    return {};
  } else {
    // число блоков это 1 + 2 * (nFloors - 1)
    let tower = [];
    let block = '*';
    let space = ' ';

    for (let i = 1; i <= nFloors; i++) {
      let line = block.repeat(1 + 2 * (i - 1));

      let numberOfSpacesAtOneSide = nFloors - i;
      let spacesAtOneSide = space.repeat(numberOfSpacesAtOneSide);
      let finalLine = spacesAtOneSide + line + spacesAtOneSide;

      tower.push(finalLine);
    }
    console.log(tower);
  }
}

towerBuilder(5);
