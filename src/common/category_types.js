// since makeupAPI doesn't have an endpoint
// that give us the list of al product types
// I will hard code it on the app :)

const category_types = [
  { tag: "blush", name: "Blush" },
  { tag: "bronzer", name: "Bronzer" },
  { tag: "eyebrow", name: "Eyebrow" },
  { tag: "eyeliner", name: "Eyeliner" },
  { tag: "eyeshadow", name: "Eyeshadow" },
  { tag: "foundation", name: "Foundation" },
  { tag: "lip_liner", name: "Lip Liner" },
  { tag: "lipstick", name: "Lipstick" },
  { tag: "mascara", name: "Mascara" },
  { tag: "nail_polish", name: "Nail Polish" },
];

export function getCategoryTypes() {
  return category_types;
}
