export const writeRecipe = (newData) => {

    const recipeContainer = document.getElementById("recipeContainer");
    
    recipeContainer.innerHTML = "";

    if (newData.length < 1) {
        recipeContainer.innerHTML = "<p> Veuillez entrer des quantités à convertir </p>";
        return;
    }
    const recipeTitle = document.createElement("h3")
    recipeTitle.textContent = "";

    if (document.getElementById ("fr").classList.contains ("selected")) {
        recipeTitle.textContent = "Recette sur mesure";
    } else {
        recipeTitle.textContent = "Personalized recipe";
    }
    recipeTitle.classList.add ("final-recipe-title");
    recipeContainer.appendChild (recipeTitle);

    newData.forEach (object => {
        const line = document.createElement ("div");
        line.textContent = `- ${object.newQuantity} ${object.newIngredient}`;
        line.classList.add ("recipeLine");
        recipeContainer.appendChild (line);
    });
}