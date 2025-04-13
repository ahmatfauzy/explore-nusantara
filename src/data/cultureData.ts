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
      image: "https://i.pinimg.com/736x/d0/39/7b/d0397b752a24db2bd60fcb9863cdf99a.jpg", 
      category: "Performance",
      region: "Java",
      link: "/culture/wayang-kulit"
    },
    {
      id: 2,
      name: "Batik",
      description: "An Indonesian technique of wax-resist dyeing applied to cloth, recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
      image: "https://i.pinimg.com/736x/ec/71/1e/ec711e0985f8df0ddca9dedf7167225e.jpg",
      category: "Craft",
      region: "National",
      link: "/culture/batik"
    },
    {
      id: 3,
      name: "Reog Ponorogo",
      description: "A traditional dance from East Java featuring a large lion-like mask called 'barongan' and peacock feathers, accompanied by gamelan music.",
      image: "https://i.pinimg.com/736x/59/14/76/591476dd07c15d60e6ed498cf2c289ec.jpg",
      category: "Performance",
      region: "Java",
      link: "/culture/reog-ponorogo"
    },
    {
      id: 4,
      name: "Toraja Funeral Ceremonies",
      description: "Elaborate funeral rituals of the Toraja people of South Sulawesi, which can last for days and involve animal sacrifices and processions.",
      image: "https://i.pinimg.com/736x/dd/54/0e/dd540e784a02b45318c71eb31ad6d2f0.jpg", 
      category: "Ceremony",
      region: "Sulawesi",
      link: "/culture/toraja-funeral"
    },
    {
      id: 5,
      name: "Gamelan",
      description: "Traditional ensemble music from Indonesia featuring metallophones, xylophones, drums, and gongs, with a distinctive sound that has influenced many composers.",
      image: "https://i.pinimg.com/736x/7e/0d/a9/7e0da932ed99c04c700899f6bb7f659e.jpg",
      category: "Music",
      region: "National",
      link: "/culture/gamelan"
    },
    {
      id: 6,
      name: "Pencak Silat",
      description: "A traditional martial art originating from Indonesia, characterized by strikes, grappling techniques, and artistic elements like dance and music.",
      image: "https://i.pinimg.com/736x/5f/a8/81/5fa881c70550484f6cb2df0557bf7786.jpg", 
      category: "Martial-Art",
      region: "National",
      link: "/culture/pencak-silat"
    }
  ];