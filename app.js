import { chooseLanguage } from "./programs/chooseLanguage.js";
import { selectMode } from "./programs/selectMode.js";
import { addLine } from "./programs/addLine.js";
import { updateSelect } from "./programs/updateSelect.js";
import { getValues } from "./programs/getValues.js";
import { scroll } from "./programs/scroll.js";
import { modal } from "./programs/modal.js";

window.addEventListener("DOMContentLoaded", () => {
  chooseLanguage(
    "Convertisseur d'ingrédients ",
    "Easy and free ",
    "main-title-one"
  );

  chooseLanguage(
    "simple et gratuit",
    "ingredient quantity converter",
    "main-title-two"
  );

  chooseLanguage(
    "Choisissez votre méthode",
    "Choose your method",
    "second-title-choice-one"
  );

  chooseLanguage(
    " de conversion.",
    " of conversion.",
    "second-title-choice-two"
  );

  chooseLanguage("Portions", "Servings", "person-mode-button");

  chooseLanguage("Ingrédient", "Ingredient", "ingredient-mode-button");

  chooseLanguage(
    "Quelles sont les quantités ",
    "What are the quantities ",
    "second-title-quantities-one"
  );

  chooseLanguage(
    "indiquées dans la recette?",
    "listed in the recipe?",
    "second-title-quantities-two"
  );

  chooseLanguage(
    " grammes de farine",
    " grams of flour",
    "ingredient-name",
    true
  );

  chooseLanguage(
    "Ajouter un ingrédient",
    "Add an ingredient",
    "addIngredientButton"
  );

  chooseLanguage(
    "Pour combien de personnes ",
    "How many people ",
    "second-title-people-one"
  );

  chooseLanguage(
    "allez-vous cuisiner?",
    "are you going to cook for?",
    "second-title-people-two"
  );

  chooseLanguage("La recette indique ", "The recipe is for ", "spanOne");

  chooseLanguage(
    " personnes, mais je veux cuisiner pour ",
    " servings, but I want to cook for ",
    "spanTwo"
  );

  chooseLanguage(" personnes.", " servings.", "spanThree");

  chooseLanguage(
    "A partir de quel ingrédient ",
    "Which ingredient ",
    "ingredient-second-title-people-one"
  );

  chooseLanguage(
    "voulez-vous calculer?",
    "would you like to use?",
    "ingredient-second-title-people-two"
  );

  chooseLanguage("La recette indique ", "The recipe is for ", "spanOne");

  chooseLanguage(
    " personnes, mais je veux cuisiner pour ",
    " servings, but I want to cook for ",
    "spanTwo"
  );

  chooseLanguage(" personnes.", " servings.", "spanThree");

  chooseLanguage(
    "La recette indique ",
    "The recipe calls for ",
    "ingredient-spanOne"
  );

  chooseLanguage(
    "Sélectionnez un ingrédient",
    "Select an ingredient",
    "ingredientSelectOption"
  );

  chooseLanguage("mais j'en ai ", "but I have ", "ingredient-spanTwo");

  chooseLanguage(" personnes.", " servings.", "spanThree");

  chooseLanguage(".", ".", "ingredient-spanThree");

  chooseLanguage("Recevoir la recette", "Get the recipe", "personSubmitButton");

  chooseLanguage(
    "Recevoir la recette",
    "Get the recipe",
    "ingredientSubmitButton"
  );

  chooseLanguage(
    "Mentions légales et politique de confidentialité",
    "Legal notice and privacy policy",
    "openModal"
  );

  chooseLanguage("Recevoir la recette", "Get the recipe", "submitButton");

  selectMode();
  // The creation of the line is triggered by a click on the button.
  document
    .getElementById("addIngredientButton")
    .addEventListener("click", addLine);

  ingredientSelect.addEventListener("focus", updateSelect);

  document
    .getElementById("personSubmitButton")
    .addEventListener("click", getValues);

  document
    .getElementById("ingredientSubmitButton")
    .addEventListener("click", getValues);

  // Handle the center problem by removing the property if the main section is high enough.
  document
    .getElementById("addIngredientButton")
    .addEventListener("click", scroll);
  document
    .getElementById("ingredientSubmitButton")
    .addEventListener("click", scroll);
  document
    .getElementById("personSubmitButton")
    .addEventListener("click", scroll);

  window.addEventListener("resize", scroll);

  // Open modal
  const { modalElement, openModal, closeModal, switchLanguageContent } =
    modal();
  openModal.onclick = function (event) {
    event.preventDefault();
    modalElement.style.display = "block";
    switchLanguageContent();
  };

  // Fermer la modale lorsque l'utilisateur clique sur la croix
  closeModal.onclick = function () {
    modalElement.style.display = "none";
  };

  // Fermer la modale si l'utilisateur clique en dehors de la modale
  window.onclick = function (event) {
    if (event.target === modalElement) {
      modalElement.style.display = "none";
    }
  };

  // Attendre que la page soit entièrement chargée
  window.addEventListener("load", function () {
    // Sélectionner tous les champs de texte du formulaire
    const inputs = document.querySelectorAll(
      'input[type="text"], input[type="email"], input[type="password"]'
    );

    // Ajouter un événement pour détecter l'autocomplétion
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        // Vérifier si le champ a été autofillé (rempli par le navigateur)
        if (input.value !== "") {
          input.style.backgroundColor = "white"; // Forcer le fond blanc
          input.style.color = "black"; // Forcer la couleur du texte
        }
      });

      // Vérifier l'autofill même si l'utilisateur ne clique pas
      if (input.value !== "") {
        input.style.backgroundColor = "white"; // Forcer le fond blanc
        input.style.color = "black"; // Forcer la couleur du texte
      }
    });
  });
});
