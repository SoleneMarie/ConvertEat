export const writeRecipe = (newData) => {

    const recipeContainer = document.getElementById("recipeContainer");

    if (newData.length < 1) {
        recipeContainer.innerHTML = "<p> Veuillez entrer des quantités à convertir </p>";
        return;
    }

    newData.forEach (object => {
        const line = document.createElement ("div");
        line.textContent = `- ${object.newQuantity} ${object.newIngredient}`;
        line.classList.add ("recipeLine");
        recipeContainer.appendChild (line);
    });
}