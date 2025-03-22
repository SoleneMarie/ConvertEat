import { chooseLanguage } from "./programs/chooseLanguage.js?v=2.3";
import { isNumber } from "./programs/isNumber.js?v=2.3";
import { autocomplete } from "./autocomplete.js";
import { selectMode } from "./programs/selectMode.js?v=2.3";
import { validateLine } from "./programs/validateLine.js";
import { updateSelect } from "./programs/updateSelect.js?v=2.3";
import { getValues } from "./programs/getValues.js?v=2.3";
import { scroll } from "./programs/scroll.js?v=2.3";
import { modal } from "./programs/modal.js?v=2.3";

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
    "Suivre une recette, oui, mais... pour douze personnes au lieu de huit, avec cinq oeufs au lieu de quatre?",
    "Following a recipe, yes, but... for twelve people instead of eight, with five eggs instead of four?",
    "descriptionText"
  );

  chooseLanguage(
    "ajuste les quantités pour vous.",
    "adjusts the quantities for you.",
    "descriptionSpan"
  );

  chooseLanguage("Suivez les étapes!", "Follow the steps!", "followStepText");

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
    "indiquées dans votre recette?",
    "listed in your recipe?",
    "second-title-quantities-two"
  );

  chooseLanguage("ex : farine", "ex : flour", "ingredient-name", true);

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

  chooseLanguage(
    "Afficher la recette",
    "Display the recipe",
    "personSubmitButton"
  );

  chooseLanguage(
    "Afficher la recette",
    "Display the recipe",
    "ingredientSubmitButton"
  );

  chooseLanguage(
    "Mentions légales et politique de confidentialité",
    "Legal notice and privacy policy",
    "openModal"
  );

  chooseLanguage("aucune unité", "no unit", "no-unit");

  chooseLanguage("milligrammes", "milligrams", "milligrammes");

  chooseLanguage("centigrammes", "centigrams", "centigrammes");

  chooseLanguage("décigrammes", "decigrams", "décigrammes");

  chooseLanguage("grammes", "grams", "grammes");

  chooseLanguage("kilogrammes", "kilograms", "kilogrammes");

  chooseLanguage("livres", "pounds", "livres");

  chooseLanguage("onces", "ounces", "onces");

  chooseLanguage("millilitres", "milliliters", "millilitres");

  chooseLanguage("centilitres", "centiliters", "centilitres");

  chooseLanguage("décilitres", "deciliters", "décilitres");

  chooseLanguage("litres", "liters", "litres");

  chooseLanguage("pintes", "pints", "pintes");

  chooseLanguage("gallons", "gallons", "gallons");

  chooseLanguage("cuillères à soupe", "tablespoons", "cuillères-à-soupe");

  chooseLanguage("cuillères à café", "teaspoons", "cuillères-à-café");

  chooseLanguage("verres", "glasses", "verres");

  chooseLanguage("tasses", "cups", "tasses");

  chooseLanguage("bols", "bowls", "bols");

  chooseLanguage("pincées", "pinches", "pincées");

  chooseLanguage("poignées", "handfuls", "poignées");

  chooseLanguage("moitié", "half", "moitié");

  chooseLanguage("tiers", "thirds", "tiers");

  chooseLanguage("quarts", "quarters", "quarts");

  chooseLanguage("Rien", "Nothing", "optgroup1");

  chooseLanguage("Poids", "Weight", "optgroup2");

  chooseLanguage("Contenance", "Capacity", "optgroup3");

  chooseLanguage("Autre unité de volume", "Other volume unit", "optgroup4");

  chooseLanguage("Fraction", "Fraction", "optgroup5");

  // Choose person mode by default.
  selectMode();

  const input = document.getElementById("ingredient-quantity");

  input.addEventListener("input", (event) => {
    let value = event.target.value;
    // Supprime les caractères qui ne sont pas des chiffres
    value = value.replace(/[^0-9]/g, "");
    if (value === "0") {
      20;
      value = "";
    }
    event.target.value = value;
  });

  // Enclencher l'autocomplétion.
  // Au chargement, une liste d'autocomplétion en français est créée.
  let autocompleteInstance = autocomplete("fr", undefined);

  const enButton = document.getElementById("en");
  enButton.addEventListener("click", () => {
    // "true" signifie qu'il existe déjà une instance à éditer.
    autocompleteInstance = autocomplete("en", autocompleteInstance);
  });
  const frButton = document.getElementById("fr");
  frButton.addEventListener("click", () => {
    autocompleteInstance = autocomplete("fr", autocompleteInstance);
  });

  // Valider une ligne de recette, au clic sur le bouton ou avec la touche "entrée".
  const addButton = document.getElementById("addButton");
  if (addButton) {
    addButton.addEventListener("click", () => {
      const isValid = validateLine();
      if (isValid) {
        // Si la validation est réussie, cache le message d'erreur s'il existe.
        const errorMessage = document.getElementById("error");
        if (errorMessage) {
          errorMessage.remove();
        }
      }
    });
  }

  const fields = [
    document.getElementById("ingredient-quantity"),
    document.getElementById("ingredientUnity"),
    document.getElementById("ingredient-name"),
  ];

  fields.forEach((field) => {
    if (field) {
      field.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const isValid = validateLine();
          if (isValid) {
            // Si la validation est réussie, cache le message d'erreur s'il existe.
            const errorMessage = document.getElementById("error");
            if (errorMessage) {
              errorMessage.remove();
            }
          }
        }
      });
    }
  });

  // Récupère les lignes déjà validées pour les choix du menu d'options.
  const ingredientOptionMenu = document.getElementById("ingredientSelect");
  ingredientOptionMenu.addEventListener("focus", updateSelect);
  // Filter the content of inputs supposed to be number inputs.
  const numberInputs = Array.from(
    document.getElementsByClassName("ingredient-quantity")
  );
  numberInputs.forEach((input) => {
    input.addEventListener("input", () => {
      let newValue = isNumber(input.value, false);
      input.value = newValue;
    });
  });

  const startPortionsInput = document.getElementById("startPortions");
  startPortionsInput.addEventListener("input", () => {
    let newValue = isNumber(startPortionsInput.value, true);
    startPortionsInput.value = newValue;
  });

  const endPortionsInput = document.getElementById("endPortions");
  endPortionsInput.addEventListener("input", () => {
    let newValue = isNumber(endPortionsInput.value, true);
    endPortionsInput.value = newValue;
  });

  const endQuantityInput = document.getElementById("endQuantity");
  endQuantityInput.addEventListener("input", () => {
    let newValue = isNumber(endQuantityInput.value, true);
    endQuantityInput.value = newValue;
  });

  // The creation of the line is triggered by a click on the button.
  // document
  //   .getElementById("addIngredientButton")
  //   .addEventListener("click", addLine);

  // ingredientSelect.addEventListener("focus", updateSelect); CODE MORT?

  document
    .getElementById("personSubmitButton")
    .addEventListener("click", getValues);

  document
    .getElementById("ingredientSubmitButton")
    .addEventListener("click", getValues);

  // Handle the center problem by removing the property if the main section is high enough.
  // document
  //   .getElementById("addIngredientButton")
  //   .addEventListener("click", scroll);
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
