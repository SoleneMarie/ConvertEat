import { chooseLanguage } from "./programs/chooseLanguage.js";
import { addLine } from "./programs/addLine.js";
import { getValues } from "./programs/getValues.js";
import { modal } from "./programs/modal.js";
import { hover } from "./programs/hover.js";

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
  chooseLanguage("Recevoir la recette", "Get the recipe", "submitButton");

  chooseLanguage(" Mentions légales et politique de confidentialité", "Legal notice and privacy policy", "openModal");
  chooseLanguage("Recevoir la recette", "Get the recipe", "submitButton");

  // Changes text color when the logos are hovered
  hover(".hoverLogo", "hoverTarget");

  // The creation of the line is triggered by a click on the button.
  document
    .getElementById("addIngredientButton")
    .addEventListener("click", addLine);

  document.getElementById("submitButton").addEventListener("click", getValues);

  const { modalElement, openModal, closeModal, switchLanguageContent} = modal();
  // Ouvrir la modale lorsque l'utilisateur clique sur le lien
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
});
