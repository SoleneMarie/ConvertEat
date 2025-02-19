import { updateErrorMessage } from "./updateErrorMessage.js";

export const validateLine = () => {
  let quantityInput = document.getElementById("ingredient-quantity");
  let unitMenu = document.getElementById("ingredientUnity");
  let nameInput = document.getElementById("ingredient-name");

  let quantity = quantityInput.value;
  let unit = unitMenu.value;
  let name = nameInput.value;

  if (!quantity || !name || !unit) {
    let presentMessage = document.getElementById("error");
    if (!presentMessage) {
      updateErrorMessage(0);
    }
    return false;
  }

  // Rajoute le "de" si besoin pour afficher ensuite la ligne d'ingrédient.
  if (unit !== "aucune unité" && unit !== "no unit") {
    if (!name.trim().startsWith("de ")) {
      name = "de " + name.trim();
    }
  } else if (unit === "aucune unité" || unit === "no unit") {
    unit = "";
  }

  // Création d'un nouveau bloc html lorsque la nouvelle valeur est validée.
  const lineText = quantity + " " + unit + " " + name;
  const linesContainer = document.getElementById("validated-lines");

  const text = document.createElement("p");
  text.innerHTML = lineText;
  text.classList.add("new-line-text");

  const button = document.createElement("button");
  button.innerHTML = "X";
  button.classList.add("delete-line-button");
  button.addEventListener("click", function () {
    line.remove();
  });

  const line = document.createElement("div");
  line.classList.add("new-line");
  line.appendChild(text);
  line.appendChild(button);

  linesContainer.appendChild(line);

  // Réinitialiser les valeurs des champs
  quantityInput.value = "";
  unitMenu.value = unitMenu.options[4].value;
  nameInput.value = "";

  return true;
};
