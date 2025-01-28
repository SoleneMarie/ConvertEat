export const converter = (ingredientsData) => {
  const personModeButton = document.getElementById("person-mode-button");
  let startPortionsElement = 0;
  let endPortionsElement = 0;

  if (personModeButton.classList.contains("selected")) {
    startPortionsElement = Number(
      document.getElementById("startPortions").value
    );
    endPortionsElement = Number(document.getElementById("endPortions").value);
  } else {
    const startPortion = document.getElementById("ingredientSelect");
    const startPortionValue = startPortion.value;
    //regex to extract a number from a string.
    const result = startPortionValue.match(/\d+(\.\d+)?/);

    startPortionsElement = Number(result[0]);
    endPortionsElement = Number(document.getElementById("endQuantity").value);
  }

  if (!startPortionsElement || !endPortionsElement) {
    return [];
  }

  if (isNaN(startPortionsElement) || isNaN(endPortionsElement)) {
    return [];
  }

  const newData = [];

  ingredientsData.forEach((ingredient) => {
    const startQuantity = ingredient.quantity;
    let endQuantity =
      (startQuantity * endPortionsElement) / startPortionsElement;
    // Calculate a round quantity if necessary.
    if (!Number.isInteger(endQuantity)) {
      if (endQuantity < 1) {
        endQuantity = endQuantity.toFixed(1);
      } else {
        endQuantity = Math.round(endQuantity);
      }
    }

    newData.push({
      newQuantity: endQuantity,
      newIngredient: ingredient.ingredient,
    });
  });

  return newData;
};
