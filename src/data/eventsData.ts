export interface Event {
  id: string;
  category: string;
  title: string;
  date: string;
  location: string;
  image: string;
  path: string;
}

export const events: Event[] = [
  {
    id: "1",
    category: "MGE",
    title: "Indonesia Pharmaceutical Expo",
    date: "21 Oct 2025 - 26 Oct 2025",
    location: "Central Jakarta City, Jakarta",
    image: "/images/pharma-expo.jpg",
    path: "/events/pharma-expo",
  },
  {
    id: "2",
    category: "Creative",
    title: "Bakdan Neng Solo",
    date: "2 Apr 2025 - 2 Apr 2025",
    location: "Sundarita City, Central Java",
    image: "/images/bakdan.jpg",
    path: "/events/bakdan",
  },
  {
    id: "3",
    category: "Sports Wellness",
    title: "Mandalika Racing Series (1st Round)",
    date: "11 Apr 2025 - 13 Apr 2025",
    location: "Central Lambeck Property, West Nusa Tenggara",
    image: "/images/mandalika.jpg",
    path: "/events/mandalika",
  },
  {
    id: "4",
    category: "Carnival",
    title: "Tuban Spectral Carnival",
    date: "31 Aug 2025 - 31 Aug 2025",
    location: "Tuban Regency, East Java",
    image: "/images/tuban.jpg",
    path: "/events/tuban",
  },
];
