import { getValues } from "./getValues.js?v=3";

export const updateRecipe = (message) => {
  const recipeBackground = document.querySelector(".recipe-background");

  if (recipeBackground) {
    getValues(message);
  }
};
