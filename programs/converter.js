export const converter = (ingredientsData) => {
  const personModeButton = document.getElementById("person-mode-button");
  let startPortionsElement = 0;
  let endPortionsElement = 0;
  console.log("ingredientsData :", ingredientsData);

  if (personModeButton.classList.contains("selected")) {
    startPortionsElement = Number(
      document.getElementById("startPortions").value
    );
    endPortionsElement = Number(document.getElementById("endPortions").value);
    console.log("personMode");
  } else {
    const startPortion = document.getElementById("ingredientSelect");
    const startPortionValue = startPortion.value;
    console.log("ingredientMode");
    //regex to extract a number from a string.
    const result = startPortionValue.match(/\d+(\.\d+)?/);
    startPortionsElement = Number(result[0]);
    endPortionsElement = Number(document.getElementById("endQuantity").value);
  }
  console.log("start : ", startPortionsElement);
  console.log("end : ", endPortionsElement);

  if (!startPortionsElement || !endPortionsElement) {
    return [];
  }

  if (isNaN(startPortionsElement) || isNaN(endPortionsElement)) {
    console.log("pas un nombre?");
    return [];
  }

  const newData = [];

  ingredientsData.forEach((ingredient) => {
    const startQuantity = ingredient.quantity;
    let endQuantity =
      (startQuantity * endPortionsElement) / startPortionsElement;

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
    console.log("end quantity", endQuantity);
    console.log("newData", newData);
    newData.push({
      newQuantity: endQuantity,
      newIngredient: ingredient.ingredient,
    });
  });

  return newData;
};
