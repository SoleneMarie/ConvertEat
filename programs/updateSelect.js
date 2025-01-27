export const updateSelect = () => {
  const ingredientSelect = document.getElementById("ingredientSelect");

  const ingredientLines = [];
  const ingredientDivs = document.querySelectorAll(".ingredientLine");

  let defaultIngredient = "";
  let noDataMessage = "";

  if (document.getElementById("fr").classList.contains("selected")) {
    defaultIngredient = "ingrédient inconnu";
    noDataMessage = "Aucun ingrédient disponible";
  } else {
    defaultIngredient = "unknown ingredient";
    noDataMessage = "No available ingredient";
  }

  ingredientDivs.forEach((div) => {
    const quantityInput = div.querySelector(".ingredient-quantity");
    const ingredientInput = div.querySelector(".ingredient-name");

    const quantity = quantityInput ? String(quantityInput.value) : "";
    const ingredient =
      ingredientInput && ingredientInput.value !== ""
        ? ingredientInput.value
        : defaultIngredient;

    if (quantity && ingredient) {
      const line = `${quantity} ${ingredient}`;
      ingredientLines.push(line);
    }
  });

  ingredientSelect.innerHTML = "";

  if (ingredientLines.length > 0) {
    ingredientLines.forEach((line) => {
      const option = document.createElement("option");
      option.value = line; // On définit la valeur de l'option
      option.textContent = line; // Le texte visible pour l'utilisateur est aussi la ligne complète
      ingredientSelect.appendChild(option); // On ajoute l'option au select
    });
  } else {
    const noDataOption = document.createElement("option");
    noDataOption.value = "";
    noDataOption.textContent = noDataMessage;
    ingredientSelect.appendChild(noDataOption);
  }
};
