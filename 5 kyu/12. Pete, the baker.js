// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  const ingredientsFromRecipe = Object.keys(recipe);
  const ingredientsAvailable = Object.keys(available);

  if (ingredientsAvailable.length < ingredientsFromRecipe.length) {
    return 0;
  }

  let amountOfCakes;

  for (let i = 0; i < ingredientsFromRecipe.length; i++) {
    const ingredient = ingredientsFromRecipe[i];

    if (available[ingredient] < recipe[ingredient]) {
      amountOfCakes = 0;
      break;
    }

    const numberOfCakesFromCurrentIngredient = Math.floor(
      available[ingredient] / recipe[ingredient]
    );

    if (amountOfCakes === undefined) {
      amountOfCakes = numberOfCakesFromCurrentIngredient;
    } else if (numberOfCakesFromCurrentIngredient < amountOfCakes) {
      amountOfCakes = numberOfCakesFromCurrentIngredient;
    }
  }

  return amountOfCakes;
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
); // 2
