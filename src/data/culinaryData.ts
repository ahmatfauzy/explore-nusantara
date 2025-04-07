export interface Culinary {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  region: string;
  link: string;
}

export const culinaryData: Culinary[] = [
  {
    id: 1,
    name: "Rendang",
    description:
      "A rich and spicy meat dish originating from the Minangkabau ethnic group of Indonesia, slowly cooked in coconut milk and spices.",
    image: "/images/borobudur.jpeg", // Placeholder image
    category: "food",
    region: "Sumatra",
    link: "/culinary/rendang",
  },
  {
    id: 2,
    name: "Sate Ayam",
    description:
      "Skewered and grilled chicken served with a tasty peanut sauce, one of Indonesia's most popular street foods.",
    image: "/images/borobudur.jpeg", // Placeholder image
    category: "food",
    region: "Java",
    link: "/culinary/sate-ayam",
  },
  {
    id: 3,
    name: "Nasi Goreng",
    description:
      "Indonesian fried rice, typically spiced with sweet soy sauce, shallots, garlic, tamarind and chili and accompanied by other ingredients.",
    image: "/images/borobudur.jpeg", // Placeholder image
    category: "food",
    region: "National",
    link: "/culinary/nasi-goreng",
  },
  {
    id: 4,
    name: "Es Cendol",
    description:
      "A sweet iced dessert containing droplets of green rice flour jelly, coconut milk and palm sugar syrup.",
    image: "/images/borobudur.jpeg", // Placeholder image
    category: "drink",
    region: "Java",
    link: "/culinary/es-cendol",
  },
  {
    id: 5,
    name: "Es Teler",
    description:
      "A fruit cocktail dessert of shaved ice, condensed milk, coconut, avocado, jackfruit, and coconut gel.",
    image: "/images/borobudur.jpeg", // Placeholder image
    category: "drink",
    region: "National",
    link: "/culinary/es-teler",
  },
  {
    id: 6,
    name: "Gudeg",
    description:
      "A traditional Javanese cuisine from Yogyakarta made from young unripe jack fruit boiled for several hours with palm sugar and coconut milk.",
    image: "/images/borobudur.jpeg", // Placeholder image
    category: "food",
    region: "Java",
    link: "/culinary/gudeg",
  },
];
