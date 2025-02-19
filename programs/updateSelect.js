export const updateSelect = () => {
  const ingredientSelect = document.getElementById("ingredientSelect");

  const ingredientLines = [];
  const ingredientTexts = document.querySelectorAll(".new-line-text");

  let noDataMessage = "";

  if (document.getElementById("fr").classList.contains("selected")) {
    noDataMessage = "Aucun ingrédient disponible";
  } else {
    noDataMessage = "No available ingredient";
  }

  // Récupérer les lignes déjà validées et les ranger dans un tableau.
  ingredientTexts.forEach((text) => {
    ingredientLines.push(text.textContent);
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
