// RGB to Hex Color Converter
// Create a function that converts color in RGB format to Hex format.

// Examples
// rgbToHex("rgb(0, 128, 192)") ➞ "#0080c0"

// rgbToHex("rgb(45, 255, 192)") ➞ "#2dffc0"

// rgbToHex("rgb(0, 0, 0)") ➞ "#000000"

// console.log('255'.toString());

function rgbHex(colors) {
  const result = colors.map((color) => {
    color = Math.max(0, Math.min(255, color));
    return color.toString(16).padStart(2, "0");
  });
  console.log(`#${result.join("")}`);
}
rgbHex([255, 165, 0]);
rgbHex([255, 255, 255]);
