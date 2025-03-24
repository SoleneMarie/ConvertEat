import { converter } from "./converter.js";
import { writeRecipe } from "./writeRecipe.js";

export const getValues = (message) => {
  const ingredientLines = Array.from(
    document.getElementsByClassName("new-line-text")
  );
  const ingredientsData = [];

  ingredientLines.forEach((line) => {
    let content = line.textContent;
    const regex = /^(\d+)\s*(.*)$/;
    // méthode qui renvoie un tableau : chaine capturée, première partie, deuxième partie. (ou null)
    const match = content.match(regex);

    if (match) {
      const quantity = match[1];
      const ingredient = match[2];

      ingredientsData.push({
        quantity: quantity,
        ingredient: ingredient,
      });
    }
  });

  const newData = converter(ingredientsData);
  writeRecipe(newData, message);
};
