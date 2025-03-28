import { updateErrorMessage } from "./updateErrorMessage.js?v=3";

export const writeRecipe = (newData, message) => {
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = "";

  if (!newData || newData.length < 1) {
    if (message === undefined) {
      updateErrorMessage(1);
    }
    return;
  }

  const recipeBackground = document.createElement("section");
  recipeBackground.classList.add("recipe-background");
  const recipeTitle = document.createElement("h3");
  recipeTitle.textContent = "";

  if (document.getElementById("fr").classList.contains("selected")) {
    recipeTitle.textContent = "Recette sur mesure";
  } else {
    recipeTitle.textContent = "Personalized recipe";
  }
  recipeTitle.classList.add("final-recipe-title");
  recipeBackground.appendChild(recipeTitle);

  newData.forEach((object) => {
    const line = document.createElement("div");
    line.textContent = `- ${object.newQuantity} ${object.newIngredient}`;
    line.classList.add("recipeLine");
    recipeBackground.appendChild(line);
  });

  recipeContainer.appendChild(recipeBackground);
};
