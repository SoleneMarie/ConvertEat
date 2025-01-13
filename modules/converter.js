const startPortions = 11;
const endPortions = 7;
const startQuantity = 242;

let endQuantity = (startQuantity*endPortions) / startPortions;

if (!Number.isInteger(endQuantity)) {
    const floorDifference = endQuantity - Math.floor(endQuantity);
    const ceilDifference = Math.ceil(endQuantity) - endQuantity;

    if (floorDifference < ceilDifference) {
        endQuantity = Math.floor(endQuantity);
    } else {
        endQuantity = Math.ceil(endQuantity);
    }
}
console.log (endQuantity);