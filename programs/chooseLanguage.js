import { updateErrorMessage } from "./updateErrorMessage.js";

export const chooseLanguage = (stringFr, stringEn, divID, isPlaceholder) => {
  const frenchButton = document.getElementById("fr");
  const englishButton = document.getElementById("en");
  let messageDiv = "";

  messageDiv = document.getElementById(divID);

  if (!frenchButton || !englishButton || !messageDiv) {
    return;
  }

  // Change the selected button's style.
  const highlightButton = (selectedButton) => {
    frenchButton.classList.remove("selected");
    englishButton.classList.remove("selected");

    selectedButton.classList.add("selected");
  };

  highlightButton(frenchButton);

  // Update all elements (div or inputs)
  const updateAll = () => {
    if (isPlaceholder === true) {
      messageDiv.placeholder = stringFr;
    } else {
      if (divID.includes("optgroup")) {
        messageDiv.setAttribute("label", stringFr);
      } else {
        messageDiv.textContent = stringFr;
      }
    }
  };

  // Change the elements' language
  const changeLanguage = (isFrench) => {
    const newText = isFrench ? stringFr : stringEn;
    highlightButton(isFrench ? frenchButton : englishButton);

    if (isPlaceholder === true) {
      messageDiv.placeholder = newText;
    } else {
      if (divID.includes("optgroup")) {
        messageDiv.setAttribute("label", newText);
      } else {
        messageDiv.textContent = newText;
      }
    }
  };

  updateAll();

  const recipe = document.getElementsByClassName("recipe-background");

  frenchButton.addEventListener("click", () => {
    changeLanguage(true);

    if (recipe.length !== 0) {
      const finalRecipeTitle =
        recipe[0].getElementsByClassName("final-recipe-title")[0];
      finalRecipeTitle.innerText = "Recette sur mesure";
    }
    // Mise à jour des messages d'erreur.
    const error = document.getElementById("error");
    const error2 = document.getElementById("error2");
    if (error) {
      error.innerText = "Veuillez compléter tous les champs";
    }
    if (error2) {
      error2.innerText = "Veuillez compléter tous les champs";
    }
  });

  englishButton.addEventListener("click", () => {
    changeLanguage(false);

    if (recipe.length !== 0) {
      const finalRecipeTitle =
        recipe[0].getElementsByClassName("final-recipe-title")[0];
      finalRecipeTitle.innerText = "Personalized recipe";
    }
    // Mise à jour des messages d'erreur.
    const error = document.getElementById("error");
    const error2 = document.getElementById("error2");
    if (error) {
      error.innerText = "Please complete all fields";
    }
    if (error2) {
      error2.innerText = "Please complete all fields";
    }
  });

  // Select the parent container (containing the inputs) to watch
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#ingredientsContainer");

    // Condition to be sure the DOM has finished loading.
    if (container) {
      // Best than DOMNodeInserted, to react when new html content is inserted
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.classList && node.classList.contains(divID)) {
              chooseLanguage(stringFr, stringEn, divID, isPlaceholder);
            }
          });
        });
      });
      // Reacts if a new child node is added
      observer.observe(container, { childList: true });
    }
  });
};
