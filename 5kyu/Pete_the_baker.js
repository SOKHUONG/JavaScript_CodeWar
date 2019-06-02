let numberOfCake = 0;

function cakes(recipe, available) {
  const recipePropertiesArray = Object.keys(recipe);
  const availablePropertiesArray = Object.keys(available);

  let temp = [];
  temp.length = recipePropertiesArray.length;

  if (recipePropertiesArray.length > availablePropertiesArray.length) {
    return 0;
  } else {
    for (let i = 0; i < recipePropertiesArray.length; i++) {
      temp[i] = Math.floor(
        available[recipePropertiesArray[i]] / recipe[recipePropertiesArray[i]]
      );
    }

    temp.sort((a, b) => a - b);
    numberOfCake = temp[0];
    return numberOfCake;
  }
}
