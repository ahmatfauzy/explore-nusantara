export interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  position: string;
  link: string;
  mapUrl: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Mandalika",
    description:
      "Along the south coast of the beautiful Lombok Island lies a long and wide stretch of beautiful white sand beach facing the glistening Indian Ocean.",
    image: "/images/tempat/mandalika1.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/mandalika",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15778.037136211708!2d116.32226687775462!3d-8.885640097169305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb86e078a2c7b%3A0x9a8e2773a4e1a1e3!2sMandalika%20Resort!5e0!3m2!1sen!2sid!4v1713093612361!5m2!1sen!2sid"
  },
  {
    id: 2,
    name: "Borobudur",
    description:
      "A majestic 9th-century Buddhist temple in Central Java, recognized as the largest Buddhist temple in the world.",
    image: "/images/tempat/borobudur.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/borobudur",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6031302724894!2d110.20097327458374!3d-7.60766997653983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf009a7d697%3A0xdd34334744dc3cb!2sBorobudur%20Temple!5e0!3m2!1sen!2sid!4v1713093648324!5m2!1sen!2sid"
  },
  {
    id: 3,
    name: "Likupang",
    description:
      "A pristine coastal area in North Sulawesi with crystal clear waters and white sandy beaches perfect for diving and snorkeling.",
    image: "/images/tempat/likupang.png",
    position: "top-1/4 left-16",
    link: "/destination/likupang",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127615.50640113435!2d124.9850366732236!3d1.6721585644246258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870af2cb6c2279%3A0x4d2c5a01eacda620!2sLikupang%2C%20North%20Minahasa%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1713093683300!5m2!1sen!2sid"
  },
  {
    id: 4,
    name: "Lake Toba",
    description:
      "The largest volcanic lake in the world, located in North Sumatra, formed by a supervolcanic eruption.",
    image: "/images/tempat/lake-toba.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/lake-toba",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254911.55396420314!2d98.60289084755693!3d2.6114266036771113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031de07a843b6ad%3A0xc018edffa69c0d05!2sLake%20Toba!5e0!3m2!1sen!2sid!4v1713093718748!5m2!1sen!2sid"
  },
  {
    id: 5,
    name: "Tanjung Kelayang",
    description:
      "Famous for its unique granite rock formations and pristine beaches on Belitung Island.",
    image: "/images/tempat/kelayang.jpeg",
    position: "top-1/4 left-16",
    link: "/destination/tanjung-kelayang",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.94086942064!2d107.68798517580958!3d-2.5510883921891845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e173eda169bd025%3A0x2f0d3fba90a8362c!2sTanjung%20Kelayang%20Beach!5e0!3m2!1sen!2sid!4v1713093750412!5m2!1sen!2sid"
  },
  {
    id: 6,
    name: "Bromo",
    description:
      "An active volcano in East Java offering breathtaking views, especially during sunrise.",
    image: "/images/tempat/bromo.png",
    position: "top-1/4 left-16",
    link: "/destination/bromo",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31611.2020354818!2d112.93195214278961!3d-7.942490492044615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1713093779124!5m2!1sen!2sid"
  },
  {
    id: 7,
    name: "Morotai",
    description:
      "A hidden paradise in North Maluku with historical significance from World War II and stunning underwater scenery.",
    image: "/images/tempat/morotai.png",
    position: "top-1/4 left-16",
    link: "/destination/morotai",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509277.2071251662!2d127.97000967592408!3d2.365568756238957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329c9e24a520a315%3A0xa10f4cad9a9d790!2sMorotai%20Island!5e0!3m2!1sen!2sid!4v1713093809956!5m2!1sen!2sid"
  },
];