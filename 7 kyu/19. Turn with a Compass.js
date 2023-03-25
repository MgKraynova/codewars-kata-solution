// https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2/train/javascript

function direction(facing, turn) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  let steps;
  let result;

  if (Math.abs(turn) > 360) {
    steps = (turn % 360) / 45;
  } else {
    steps = turn / 45;
  }

  directions.forEach((item, index) => {
    if (item === facing) {
      if (steps >= 0) {
        if (index + steps <= directions.length - 1) {
          result = directions[index + steps];
        } else {
          steps = steps - (directions.length - 1 - index);
          result = directions[steps - 1];
        }
      } else {
        if (index + steps < 0) {
          result = directions[directions.length + (index + steps)];
        } else {
          result = directions[index + steps];
        }
      }
    }
  });

  return result;
}

//direction("W", 495);
//direction("N", -450);
//direction("SE", -45);
direction('S', 315); // SE
direction('SE', -540); // NW
