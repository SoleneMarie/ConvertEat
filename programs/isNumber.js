export const isNumber = (value, isInteger) => {
  if (value === "0") {
    return "1";
  };

  if (isInteger) {
    value = value.replace(/[^0-9]/g, "");
  } else {
    value = value.replace(/[^0-9\.\,]/g, "");
    const parts = value.split(/[\,\.]/);

    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join(""); // Garder un seul séparateur
    }

    value = value.replace(",", ".");
  }

  return value;
};
