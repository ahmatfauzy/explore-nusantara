export interface Culture {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    region: string;
    link: string;
  }
  
 export const cultureData: Culture[] = [
    {
      id: 1,
      name: "Wayang Kulit",
      description: "Traditional shadow puppet theatre from Java, Indonesia. The flat puppets cast shadows on a backlit screen while accompanied by gamelan music.",
      image: "/images/borobudur.jpeg", // Placeholder image
      category: "performance",
      region: "Java",
      link: "/culture/wayang-kulit"
    },
    {
      id: 2,
      name: "Batik",
      description: "An Indonesian technique of wax-resist dyeing applied to cloth, recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
      image: "/images/borobudur.jpeg", // Placeholder image
      category: "craft",
      region: "National",
      link: "/culture/batik"
    },
    {
      id: 3,
      name: "Reog Ponorogo",
      description: "A traditional dance from East Java featuring a large lion-like mask called 'barongan' and peacock feathers, accompanied by gamelan music.",
      image: "/images/borobudur.jpeg", // Placeholder image
      category: "performance",
      region: "Java",
      link: "/culture/reog-ponorogo"
    },
    {
      id: 4,
      name: "Toraja Funeral Ceremonies",
      description: "Elaborate funeral rituals of the Toraja people of South Sulawesi, which can last for days and involve animal sacrifices and processions.",
      image: "/images/borobudur.jpeg", // Placeholder image
      category: "ceremony",
      region: "Sulawesi",
      link: "/culture/toraja-funeral"
    },
    {
      id: 5,
      name: "Gamelan",
      description: "Traditional ensemble music from Indonesia featuring metallophones, xylophones, drums, and gongs, with a distinctive sound that has influenced many composers.",
      image: "/images/borobudur.jpeg", // Placeholder image
      category: "music",
      region: "National",
      link: "/culture/gamelan"
    },
    {
      id: 6,
      name: "Pencak Silat",
      description: "A traditional martial art originating from Indonesia, characterized by strikes, grappling techniques, and artistic elements like dance and music.",
      image: "/images/borobudur.jpeg", // Placeholder image
      category: "martial-art",
      region: "National",
      link: "/culture/pencak-silat"
    }
  ];