 import { converter } from "./converter.js";
 
 const getValues = () => {
    // Get a NodeList.

    const ingredientLines = document.querySelectorAll(".ingredientLine");
    const ingredientsData = [];

    ingredientLines.forEach(line => {
        const quantity = line.querySelector("input[name='quantity']").value;
        const ingredient = line.querySelector("input[name='ingredient']").value;

        ingredientsData.push({
            quantity: quantity,
            ingredient: ingredient
        });
    });

    converter (ingredientsData);
};

