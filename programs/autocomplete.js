import { frenchIngredients } from "./frenchIngredients.js?v=3";
import { englishIngredients } from "./englishIngredients.js?v=3";

export const autocomplete = (language, autocompleteInstance) => {
  // Obtenir le bon tableau d'ingrédients, dans l'ordre alphabétique.
  let ingredients = [];

  if (language === "fr") {
    ingredients = frenchIngredients;
  } else {
    ingredients = englishIngredients;
  }

  // Créer une instance au chargement, si elle n'existe pas encore.
  if (!autocompleteInstance) {
    const ingredientInput = document.getElementById("ingredient-name");

    autocompleteInstance = new Awesomplete(ingredientInput, {
      list: ingredients,
      minChars: 1,
      maxItems: 10,
      autoFirst: true,
      // Définir dans quel ordre sont présentés les mots.
      sort: (a, b) => {
        const input = ingredientInput.value.toLowerCase();
        const aStarts = a.startsWith(input);
        const bStarts = b.startsWith(input);

        if (aStarts && !bStarts) return -1; // `a` doit être avant `b`
        if (!aStarts && bStarts) return 1; // `b` doit être avant `a`

        return a.localeCompare(b, "fr", { sensitivity: "base" }); // Tri alphabétique si égalité
      },
    });
    // Si elle existe déjà, simplement changer la liste utilisée.
  } else {
    autocompleteInstance.list = ingredients;
  }
  // Récupérer l'instance créée ou modifiée.
  return autocompleteInstance;
};
