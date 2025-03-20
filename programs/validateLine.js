import { updateErrorMessage } from "./updateErrorMessage.js";

export const validateLine = () => {
  let quantityInput = document.getElementById("ingredient-quantity");
  let unitMenu = document.getElementById("ingredientUnity");
  let nameInput = document.getElementById("ingredient-name");

  let quantity = quantityInput.value;

  console.log("quantité à la création de ligne:", quantity);

  // Si la quantité commence par "." ou ",", on ajoute un "0" devant
  if (quantity.startsWith(".") || quantity.startsWith(",")) {
    quantity = "0" + quantity;
  }

  // Si la quantité termine par "." ou ",", on supprime le dernier caractère
  if (quantity.endsWith(".") || quantity.endsWith(",")) {
    quantity = quantity.slice(0, -1);
  }

  console.log("Quantité après modification:", quantity);
  let unit = unitMenu.value;
  let name = nameInput.value;

  if (!quantity || !name || !unit) {
    let presentMessage = document.getElementById("error");
    if (!presentMessage) {
      updateErrorMessage(0);
    }
    return false;
  }

  // Rajoute une préposition si besoin pour afficher ensuite la ligne d'ingrédient.

  if (document.getElementById("fr").classList.contains("selected")) {
    // FRANCAIS
    if (unit !== "aucune unité") {
      if (!name.trim().startsWith("de ") && !name.trim().startsWith("d'")) {
        // Détermine si le nom commence par une voyelle.
        const vowels = ["a", "e", "i", "o", "u", "y"];
        let vowelFirst = false;
        const firstLetter = name.trim().charAt(0);
        if (vowels.includes(firstLetter)) {
          vowelFirst = true;
        }

        // DE ou D'
        if (vowelFirst === true) {
          name = "d'" + name.trim();
        } else {
          name = "de " + name.trim();
        }
      }
    } else {
      unit = "";
    }
  } else {
    // ANGLAIS
    if (unit !== "no unit") {
      if (!name.trim().startsWith("of")) {
        name = "of " + name.trim();
      }
    } else {
      unit = "";
    }
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
