import { updateErrorMessage } from "./updateErrorMessage.js";
import { getValues } from "./getValues.js";

export const chooseLanguage = (stringFr, stringEn, divID, isPlaceholder) => {
  const frenchButton = document.getElementById("fr");
  const englishButton = document.getElementById("en");
  let messageDiv = "";

  if (isPlaceholder === true) {
    messageDiv = document.getElementsByClassName(divID);
  } else {
    messageDiv = document.getElementById(divID);
  }

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
      const lines = Array.from(messageDiv);
      lines.forEach((line) => {
        line.placeholder = stringFr;
      });
    } else {
      messageDiv.textContent = stringFr;
    }
  };

  // Change the elements' language
  const changeLanguage = (isFrench) => {
    const newText = isFrench ? stringFr : stringEn;
    highlightButton(isFrench ? frenchButton : englishButton);

    if (isPlaceholder === true) {
      Array.from(messageDiv).forEach((line) => {
        line.placeholder = newText;
      });
    } else {
      messageDiv.textContent = newText;
    }
  };

  updateAll();

  const errorElement = document.getElementsByClassName("error");

  frenchButton.addEventListener("click", () => {
    changeLanguage(true);
    if (errorElement.length !== 0) {
      updateErrorMessage();
    } else {
      getValues();
    }
  });

  englishButton.addEventListener("click", () => {
    changeLanguage(false);
    if (errorElement.length !== 0) {
      updateErrorMessage();
    } else {
      getValues();
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
