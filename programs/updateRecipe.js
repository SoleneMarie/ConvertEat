import { getValues } from "./getValues.js";

export const updateRecipe = (message) => {
  const recipeBackground = document.querySelector(".recipe-background");

  if (recipeBackground) {
    getValues(message);
  }
};
