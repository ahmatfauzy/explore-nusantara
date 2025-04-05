interface Event {
    id: number;
    category: string;
    title: string;
    date: string;
    location: string;
    image: string;
    path: string;
    text: string;
  }
  
  export const eventsData: Event[] = [
    {
      id: 1,
      category: "Arts & Culture",
      title: "World Dance Day 'Toraya Ma'gellu' 2024",
      date: "April 29, 2024",
      location: "Toraja, South Sulawesi",
      image: "/images/toraya-dance.jpg",
      path: "/events/world-dance-day-2024",
      text: "Join us for an immersive cultural experience celebrating World Dance Day in the heart of Toraja. The 'Toraya Ma'gellu' event showcases traditional dance forms of Toraja, featuring performances from local artists and dancers from across Indonesia. This celebration highlights the unique cultural heritage of Sulawesi through movement and rhythm.\n\nThe event includes workshops on 'Dance Movement Techniques' and 'Dance Performance Management' led by renowned choreographers and cultural practitioners. Participants will learn about the symbolism behind traditional movements and the spiritual significance of dance in Torajan culture.\n\nThe day culminates in a grand performance under the stars, where both traditional and contemporary interpretations of Torajan dance will be presented. This event aims to preserve cultural heritage while creating a platform for artistic evolution and exchange between generations of dancers."
    },
    {
      id: 2,
      category: "Culinary",
      title: "Ubud Food Festival 2024",
      date: "May 17-19, 2024",
      location: "Ubud, Bali",
      image: "/images/ubud-food.jpg",
      path: "/events/ubud-food-festival-2024",
      text: "The Ubud Food Festival returns for its 2024 edition, bringing together top chefs, food producers, storytellers, and culinary enthusiasts from across Indonesia and beyond. This three-day event celebrates Indonesia's diverse culinary heritage through cooking demonstrations, special events, masterclasses, and food tours.\n\nVisitors can experience the rich tapestry of Indonesian cuisine, from street food favorites to fine dining innovations, all against the backdrop of Ubud's cultural landscape. This year's theme focuses on sustainable food practices and the revival of traditional cooking methods.\n\nSpecial highlights include masterclasses on fermentation techniques, regional spice blends, and plant-based Indonesian cooking. The festival also features panel discussions on food security, culinary tourism, and preserving culinary heritage in the modern era.\n\nDon't miss the evening events that combine food with performance arts, creating multisensory experiences that showcase the intersection of Indonesia's culinary and cultural traditions."
    },
    {
      id: 3,
      category: "Sports & Wellness",
      title: "Borobudur Marathon 2024",
      date: "July 14, 2024",
      location: "Magelang, Central Java",
      image: "/images/borobudur-marathon.jpg",
      path: "/events/borobudur-marathon-2024",
      text: "Run through history at the prestigious Borobudur Marathon 2024. Set against the backdrop of the magnificent 9th-century Buddhist temple, this IAAF-recognized road race offers participants a unique opportunity to compete while experiencing Indonesia's cultural heritage.\n\nThe marathon features three race categories: Full Marathon (42.195 km), Half Marathon (21.1 km), and 10K Run, making it accessible to runners of all experience levels. The course winds through scenic villages, lush green rice fields, and past ancient temple complexes, offering runners an unforgettable journey through the heart of Java.\n\nBesides the main race, the event includes a sports exhibition, traditional Javanese performances, and various community activities promoting health and wellness. Local artisans and food vendors will showcase regional specialties, creating a festive atmosphere for both participants and spectators.\n\nThe Borobudur Marathon is not just a sporting event but a celebration of culture, community, and the breathtaking landscape of Central Java."
    },
    {
      id: 4,
      category: "Music",
      title: "Jakarta International Java Jazz Festival",
      date: "May 24-26, 2024",
      location: "Jakarta Convention Center",
      image: "/images/java-jazz.jpg",
      path: "/events/java-jazz-2024",
      text: "The Jakarta International Java Jazz Festival returns in 2024 with an exciting lineup of local and international jazz artists. Now in its 19th year, Java Jazz has established itself as one of the largest jazz festivals in the world, drawing music lovers from across the globe to Indonesia's capital city.\n\nThis three-day musical extravaganza features performances across multiple stages, showcasing traditional jazz, fusion, R&B, soul, and contemporary interpretations of the genre. The festival provides a platform for both established stars and emerging talents in the jazz world, creating a dynamic environment for musical discovery and appreciation.\n\nBeyond the performances, festival-goers can enjoy jam sessions, workshops with master musicians, and exhibitions celebrating the rich history of jazz in Indonesia and worldwide. Food vendors and merchandise booths add to the festive atmosphere of this world-class event.\n\nJava Jazz Festival embodies the spirit of collaboration and cultural exchange through the universal language of music, making it a highlight of Indonesia's cultural calendar."
    },
    {
      id: 5,
      category: "Carnaval",
      title: "Jember Fashion Carnaval 2024",
      date: "August 2-4, 2024",
      location: "Jember, East Java",
      image: "/images/jember-carnaval.jpg",
      path: "/events/jember-fashion-carnaval-2024",
      text: "Witness the spectacular Jember Fashion Carnaval, a world-class fashion event that transforms the streets of Jember into a vibrant runway. Known for its extravagant costumes and creative designs, this annual event has gained international recognition for showcasing Indonesian creativity and craftsmanship.\n\nThe 2024 edition features ten thematic runway shows inspired by global cultures, environmental awareness, and futuristic visions. Local designers, students, and community members collaborate to create elaborate costumes that combine traditional elements with avant-garde fashion concepts.\n\nBeyond the main parade, the event includes fashion workshops, design competitions for students, photography exhibitions, and cultural performances. The carnaval creates opportunities for creative education and economic empowerment in the region while putting Jember on the global fashion map.\n\nJember Fashion Carnaval exemplifies how a small city in East Java has leveraged creativity and community participation to create a world-renowned event that celebrates diversity, artistry, and Indonesian innovation."
    },
    {
      id: 6,
      category: "MICE",
      title: "Indonesia International Tourism Conference",
      date: "September 12-14, 2024",
      location: "Bali International Convention Centre",
      image: "/images/tourism-conference.jpg",
      path: "/events/tourism-conference-2024",
      text: "The Indonesia International Tourism Conference 2024 brings together industry professionals, policy makers, and tourism stakeholders to discuss the future of sustainable tourism in the archipelago. This premier MICE (Meetings, Incentives, Conferences, and Exhibitions) event addresses challenges and opportunities in Indonesia's tourism sector.\n\nThe three-day conference features keynote speeches from tourism ministers, industry leaders, and sustainability experts. Panel discussions cover topics such as digital transformation in tourism, community-based tourism development, heritage preservation, and resilience strategies for the post-pandemic era.\n\nThe exhibition area showcases innovative tourism products, destination marketing organizations, hospitality technologies, and sustainable tourism initiatives from across Indonesia's diverse provinces. Networking sessions facilitate connections between international buyers and local tourism providers.\n\nAttendees will gain valuable insights into emerging trends, best practices, and partnership opportunities that will shape the future of Indonesia's tourism landscape, reinforcing the country's position as a leading sustainable tourism destination."
    },
    {
      id: 7,
      category: "Creative",
      title: "Bandung Design Biennale",
      date: "October 5-20, 2024",
      location: "Bandung, West Java",
      image: "/images/bandung-design.jpg",
      path: "/events/bandung-design-biennale-2024",
      text: "The Bandung Design Biennale returns in 2024, transforming Indonesia's creative city into a hub of design innovation and artistic expression. This biennial event showcases contemporary design across multiple disciplines, including graphic design, fashion, architecture, urban planning, product design, and digital media.\n\nThe theme for 2024, 'Design for Collective Futures,' explores how creative solutions can address social challenges and create more inclusive communities. Exhibitions are hosted across multiple venues in Bandung, featuring works by Indonesian designers alongside international contributors.\n\nThe program includes design workshops, public lectures, portfolio reviews, and collaborative projects between designers and local communities. Special focus is given to sustainable design practices, cultural preservation through design, and the role of technology in creative industries.\n\nThe Bandung Design Biennale reflects the city's designation as a UNESCO Creative City of Design and continues the legacy of the 1955 Asian-African Conference by fostering creative collaboration across borders."
    }
  ];