import { converter } from "./converter.js";
import { writeRecipe } from "./writeRecipe.js";
import { updateErrorMessage } from "./updateErrorMessage.js";

export const getValues = () => {
  // Get a NodeList.
  const ingredientLines = document.querySelectorAll(".ingredientLine");
  const ingredientsData = [];

  ingredientLines.forEach((line) => {
    const quantity = parseFloat(
      line.querySelector("input[name='quantity']").value
    );
    let ingredient = line.querySelector("input[name='ingredient']").value;

    if (!quantity) {
      return;
    }

    if (!ingredient) {
      ingredient = "";
    }

    ingredientsData.push({
      quantity: quantity,
      ingredient: ingredient,
    });
  });

  if (ingredientsData.length === 0) {
    updateErrorMessage();
    return;
  }

  const newData = converter(ingredientsData);
  writeRecipe(newData);
};
