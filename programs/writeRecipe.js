import { updateErrorMessage } from "./updateErrorMessage.js";

export const writeRecipe = (newData) => {
  
  console.log(newData);
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = "";

  if (newData.length < 1) {
    updateErrorMessage();
    return;
  }

  const existingRecipe = document.getElementsByClassName("recipe-background");

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
