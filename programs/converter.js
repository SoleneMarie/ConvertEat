export const converter = (ingredientsData) => {
  const startPortionsElement = document.getElementById("startPortions");
  const endPortionsElement = document.getElementById("endPortions");

  if (!startPortionsElement || !endPortionsElement) {
    return [];
  }

  const startPortions = parseFloat(startPortionsElement.value);
  const endPortions = parseFloat(endPortionsElement.value);

  if (isNaN(startPortions) || isNaN(endPortions)) {
    return [];
  }

  const newData = [];

  ingredientsData.forEach((ingredient) => {
    const startQuantity = ingredient.quantity;
    let endQuantity = (startQuantity * endPortions) / startPortions;

    // Calculate a round quantity if necessary.
    if (!Number.isInteger(endQuantity)) {
      const floorDifference = endQuantity - Math.floor(endQuantity);
      const ceilDifference = Math.ceil(endQuantity) - endQuantity;

      if (floorDifference < ceilDifference) {
        endQuantity = Math.floor(endQuantity);
      } else {
        endQuantity = Math.ceil(endQuantity);
      }
    }
    newData.push({
      newQuantity: endQuantity,
      newIngredient: ingredient.ingredient,
    });
  });

  return newData;
};
