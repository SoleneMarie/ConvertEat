 import { converter } from "./converter.js";
 import { writeRecipe } from "./writeRecipe.js";
 
 const getValues = () => {
    // Get a NodeList.
    const ingredientLines = document.querySelectorAll(".ingredientLine");
    const ingredientsData = [];

    ingredientLines.forEach(line => {
        const quantity = parseFloat (line.querySelector("input[name='quantity']").value)
        let ingredient = line.querySelector("input[name='ingredient']").value;

        if (!quantity) {
            return;
        } 

        if (!ingredient) {
            ingredient = "ingrédient inconnu";
        }

        ingredientsData.push({
            quantity: quantity,
            ingredient: ingredient
        });
    });

    const newData = converter (ingredientsData);
    writeRecipe (newData);
};

document.getElementById ("submitButton").addEventListener ("click", getValues);

