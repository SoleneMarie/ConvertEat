const addLine = () => {
    
    const ingredientsContainer = document.getElementById ("ingredientsContainer");
    // Create a <p> within a <div>.
    const newIngredientLine = document.createElement ("div");
    newIngredientLine.classList.add ("ingredientLine");

    const newLine = document.createElement ("p");

    // Line elements creation.
    
    const quantityInput = document.createElement ("input");
    quantityInput.type = "number";
    quantityInput.name = "quantity";
    quantityInput.classList.add ("ingredient-quantity");
    quantityInput.placeholder = "100";
    quantityInput.min = 1;
    quantityInput.required = true;

    const ingredientInput = document.createElement ("input");
    ingredientInput.type = "text";
    ingredientInput.name = "ingredient";
    ingredientInput.classList.add ("ingredient-name");
    ingredientInput.placeholder = "";
    ingredientInput.required = true;

    const ingredientDelete = document.createElement ("button");
    ingredientDelete.classList.add ("delete-button");
    ingredientDelete.textContent = "❌";
    // Delete the whole line if the Delete button is clicked.
    ingredientDelete.addEventListener("click", () => {
        newIngredientLine.remove();
    });

    // Attach the created elements to the line, the line to the div, the div to the container "ingredientsContainer".
    newLine.appendChild (quantityInput);
    newLine.appendChild (ingredientInput);
    newLine.appendChild (ingredientDelete);

    newIngredientLine.appendChild (newLine);

    ingredientsContainer.appendChild (newIngredientLine);
    
    //Apply correct placeholder according to the selected language
    let language = "";

    if (document.getElementById ("fr").classList.contains ("selected")) {
        ingredientInput.placeholder = "grammes de farine";
    } else {
        ingredientInput.placeholder = "grams of flour";
    }
};

// The creation of the line is triggered by a click on the button.
document.getElementById ("addIngredientButton").addEventListener ("click", addLine);