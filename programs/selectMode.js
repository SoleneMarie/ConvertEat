import { updateRecipe } from "./updateRecipe.js";

export const selectMode = () => {
  const personModeButton = document.getElementById("person-mode-button");
  const ingredientModeButton = document.getElementById(
    "ingredient-mode-button"
  );

  // Fonction pour gérer la sélection des boutons
  const ingredientChoiceDiv = document.getElementById("ingredient-choice-form");
  const personChoiceDiv = document.getElementById("person-choice-form");

  ingredientChoiceDiv.style.display = "none";
  personModeButton.classList.add("selected");
  document.getElementById("personSubmitButton").style.display = "block";
  document.getElementById("ingredientSubmitButton").style.display = "none";

  // Ajouter des événements de clic
  personModeButton.addEventListener("click", () => {
    ingredientChoiceDiv.style.display = "none";
    personChoiceDiv.style.display = "block";
    ingredientModeButton.classList.remove("selected");
    personModeButton.classList.add("selected");
    document.getElementById("personSubmitButton").style.display = "block";
    document.getElementById("ingredientSubmitButton").style.display = "none";
    updateRecipe();
  });

  ingredientModeButton.addEventListener("click", () => {
    ingredientChoiceDiv.style.display = "block";
    personChoiceDiv.style.display = "none";
    personModeButton.classList.remove("selected");
    ingredientModeButton.classList.add("selected");
    document.getElementById("personSubmitButton").style.display = "none";
    document.getElementById("ingredientSubmitButton").style.display = "block";
    updateRecipe();
  });
};
