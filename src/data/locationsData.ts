export interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  position: string;
  link: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Mandalika",
    description:
      "Along the south coast of the beautiful Lombok Island lies a long and wide stretch of beautiful white sand beach facing the glistening Indian Ocean.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/mandalika",
  },
  {
    id: 2,
    name: "Borobudur",
    description:
      "A majestic 9th-century Buddhist temple in Central Java, recognized as the largest Buddhist temple in the world.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/borobudur",
  },
  {
    id: 3,
    name: "Likupang",
    description:
      "A pristine coastal area in North Sulawesi with crystal clear waters and white sandy beaches perfect for diving and snorkeling.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/likupang",
  },
  {
    id: 4,
    name: "Lake Toba",
    description:
      "The largest volcanic lake in the world, located in North Sumatra, formed by a supervolcanic eruption.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/lake-toba",
  },
  {
    id: 5,
    name: "Tanjung Kelayang",
    description:
      "Famous for its unique granite rock formations and pristine beaches on Belitung Island.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/tanjung-kelayang",
  },
  {
    id: 6,
    name: "Bromo",
    description:
      "An active volcano in East Java offering breathtaking views, especially during sunrise.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/bromo",
  },
  {
    id: 7,
    name: "Morotai",
    description:
      "A hidden paradise in North Maluku with historical significance from World War II and stunning underwater scenery.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/morotai",
  },
];
