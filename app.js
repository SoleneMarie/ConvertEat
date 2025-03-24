import { frenchFirst } from "./programs/frenchFirst.js";
import { isNumber } from "./programs/isNumber.js?v=2.3";
import { autocomplete } from "./programs/autocomplete.js";
import { selectMode } from "./programs/selectMode.js?v=2.3";
import { validateLine } from "./programs/validateLine.js";
import { updateSelect } from "./programs/updateSelect.js?v=2.3";
import { getValues } from "./programs/getValues.js?v=2.3";
import { updateRecipe } from "./programs/updateRecipe.js";
import { scroll } from "./programs/scroll.js?v=2.3";
import { modal } from "./programs/modal.js?v=2.3";

window.addEventListener("DOMContentLoaded", () => {
  // Au premier chargement, toute la page est en français.
  frenchFirst();
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
        //Met à jour la recette.
        updateRecipe();
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

  // Récupérer la recette.
  document
    .getElementById("personSubmitButton")
    .addEventListener("click", () => {
      getValues();
      scroll();
    });

  document
    .getElementById("ingredientSubmitButton")
    .addEventListener("click", () => {
      getValues();
      scroll();
    });

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
