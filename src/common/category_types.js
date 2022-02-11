// since makeupAPI doesn't have an endpoint
// that give us the list of al product types
// I will hard code it on the app :)

const category_types = [
  "blush",
  "bronzer",
  "eyebrow",
  "eyeliner",
  "eyeshadow",
  "foundation",
  "lip_liner",
  "lipstick",
  "mascara",
  "nail_polish",
];

export function getCategoryTypes() {
  return category_types;
}
