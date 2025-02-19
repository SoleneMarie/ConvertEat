export const updateErrorMessage = (spot) => {
  const recipeContainer = document.getElementById("recipeContainer");
  const formContainer = document.getElementById("ingredients-form");

  const errorMessage = document.createElement("p");

  let container;
  if (spot === 1) {
    container = recipeContainer;
    container.innerHTML = "";
    errorMessage.id = "error2";
  } else {
    container = formContainer;
    const existingError = document.getElementById("error");
    if (existingError) {
      existingError.remove();
    }
    errorMessage.id = "error";
  }

  container.appendChild(errorMessage);

  if (document.getElementById("fr").classList.contains("selected")) {
    errorMessage.innerHTML =
      "Veuillez compléter tous les champs";
  } else {
    errorMessage.innerHTML = "Please complete all fields";
  }
};
