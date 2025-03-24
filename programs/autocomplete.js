import { frenchIngredients } from "./frenchIngredients.js";
import { englishIngredients } from "./englishIngredients.js";

export const autocomplete = (language, autocompleteInstance) => {
  // Obtenir le bon tableau d'ingrédients, dans l'ordre alphabétique.
  let ingredients = [];

  if (language === "fr") {
    ingredients = frenchIngredients;
  } else {
    ingredients = englishIngredients;
  }

  ingredients.sort();

  // Créer une instance au chargement, si elle n'existe pas encore.
  if (!autocompleteInstance) {
    const ingredientInput = document.getElementById("ingredient-name");

    autocompleteInstance = new Awesomplete(ingredientInput, {
      list: ingredients,
      minChars: 1,
      maxItems: 10,
      autoFirst: true,
      sort: false,
    });
    // Si elle existe déjà, simplement changer la liste qu'elle utilise.
  } else {
    autocompleteInstance.list = ingredients;
  }
  // Récupérer l'instance créée ou modifiée.
  return autocompleteInstance;
};
