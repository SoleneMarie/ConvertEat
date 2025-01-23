export const updateErrorMessage = () => {
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = "";

  if (document.getElementById("fr").classList.contains("selected")) {
    recipeContainer.innerHTML =
      "<p class='error'> Veuillez entrer des quantités à convertir </p>";
  } else {
    recipeContainer.innerHTML =
      "<p class='error'> Please enter quantities to convert </p>";
  }
};
