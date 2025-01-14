export const converter = (ingredientsData) => {

    if (document.getElementById ("startPortions") && document.getElementById ("endportions")) {
        const startPortions = document.getElementById ("startPortions").value;
        const endPortions = document.getElementById ("endportions").value;

        ingredientsData.forEach (ingredient => {
            const startQuantity = ingredient.quantity;
            let endQuantity = (startQuantity*endPortions) / startPortions; 

            // Calculate a round quantity if necessary.
            if (!Number.isInteger (endQuantity)) {
                const floorDifference = endQuantity - Math.floor (endQuantity);
                const ceilDifference = Math.ceil (endQuantity) - endQuantity;
    
                if (floorDifference < ceilDifference) {
                    endQuantity = Math.floor (endQuantity);
                } else {
                    endQuantity = Math.ceil (endQuantity);
                }
            }
            
            // Pour chaque ingrédient, produire une ligne de texte
        }); 
    }
}




