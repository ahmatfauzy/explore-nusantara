export interface Event {
  id: number;
  category: string;
  title: string;
  date: string;
  location: string;
  image: string;
  path: string;
  text: string
}

export const events: Event[] = [
  {
    id: 6,
    category: "Carnaval",
    title: "Solo Batik Carnival",
    date: "Jul 12 - 13, 2025",
    location: "Surakarta (Solo), Central Java",
    image: "/images/events/solobatik.png",
    path: "/events/solo-batik-carnival-2025",
    text: "The magnificent Solo Batik Carnival returns for its 2025 edition, transforming the streets of Surakarta into a spectacular runway celebrating Indonesia's batik heritage. This vibrant parade showcases elaborate costumes and theatrical performances that reimagine traditional batik patterns through contemporary design and creative expression.\n\nThe carnival features hundreds of participants wearing dramatic costumes created entirely from batik fabrics, with designs inspired by this year's theme: 'Legends of the Archipelago.' Each creation tells a story drawn from Indonesian mythology and folklore, bringing ancient narratives to life through wearable art.\n\nBeyond the main parade, the event includes exhibitions on batik-making processes, from traditional hand-drawn techniques to innovative modern applications. Workshops allow visitors to learn batik-making directly from master artisans from Solo, a city renowned as one of Indonesia's major batik production centers.\n\nFashion shows feature contemporary designers who incorporate batik into ready-to-wear collections, demonstrating how this traditional art form continues to evolve. The batik marketplace offers visitors the opportunity to purchase authentic batik products directly from producers, supporting the local creative economy.\n\nThe Solo Batik Carnival exemplifies how traditional cultural heritage can be preserved and celebrated through contemporary creative expression, ensuring that Indonesia's UNESCO-recognized batik traditions remain vibrant and relevant for new generations.",
  },
  {
    id: 2,
    category: "Sports",
    title: "Mandalika Racing Series (1st Round)",
    date: "Apr 11 - 13, 2025",
    location: "Mandalika Circuit, Lombok, West Nusa Tenggara",
    image: "/images/events/mandalika.png",
    path: "/events/mandalika-racing-series-2025",
    text: "The adrenaline-pumping Mandalika Racing Series returns for its 2025 season, kicking off with an exciting first round at the world-class Mandalika International Street Circuit in Lombok. This premier motorsport event attracts top racers and enthusiasts from around the globe to Indonesia's premier racing venue.\n\nFeaturing multiple racing categories including superbikes, Asia Talent Cup, and national championships, the three-day event showcases the best of motorcycle racing against the stunning backdrop of Lombok's coastline. Spectators can enjoy high-speed action on the challenging 4.3km circuit that has been designed to test riders' skills and provide thrilling entertainment.\n\nBeyond the racetrack, visitors can explore the paddock area, participate in meet-and-greet sessions with racers, and enjoy exhibitions of the latest motorcycle technology and accessories. Entertainment zones offer activities for all ages, making this a family-friendly sporting weekend.\n\nThe Mandalika Racing Series promotes Indonesia's growing presence in international motorsports while boosting tourism in West Nusa Tenggara. Local food vendors and cultural performances add a distinctive Indonesian flavor to this world-class sporting event, creating a perfect blend of adrenaline and cultural experience for all attendees.",
  },
  {
    id: 3,
    category: "Music",
    title: "Dendang Piwang Music Festival",
    date: "Apr 13 - Oct 13, 2025",
    location: "Natuna Regency, Riau Islands",
    image: "/images/events/dendangpiwang.png",
    path: "/events/dendang-piwang-2025",
    text: "Discover the enchanting sounds of the Malay archipelago at the Dendang Piwang Music Festival, a six-month celebration of traditional and contemporary music held across the beautiful islands of Natuna. This unique long-format festival showcases performances every weekend, highlighting the rich musical heritage of Indonesia's northernmost region.\n\nDendang Piwang features traditional Malay orchestras, contemporary fusion bands, and solo performers who interpret ancient melodies for modern audiences. The event puts special emphasis on preserving the gambus (traditional lute) playing tradition and the distinctive vocal styles of the region.\n\nThroughout the festival period, various islands in the Natuna archipelago take turns hosting performances, allowing visitors to explore this remote and beautiful part of Indonesia while experiencing its unique cultural expressions. Each island adds its local musical traditions to the festival program, creating a diverse and comprehensive showcase of regional sounds.\n\nWorkshops on traditional instrument making, vocal techniques, and composition are offered to festival attendees, fostering cultural preservation through active participation. The festival also features cultural exchanges with musicians from neighboring Malaysia, Singapore, and Brunei, highlighting the shared cultural heritage of the Malay world.\n\nDendang Piwang represents a significant effort to document and celebrate the musical traditions of this strategically important but often overlooked part of Indonesia's cultural landscape.",
  },
  {
    id: 4,
    category: "Culinary",
    title: "Pasar Terapung Culinary Festival",
    date: "May 15 - 18, 2025",
    location: "Banjarmasin, South Kalimantan",
    image: "/images/events/pasarterapung.png",
    path: "/events/pasar-terapung-culinary-festival-2025",
    text: "The Pasar Terapung Culinary Festival transforms Banjarmasin's famous floating markets into a gastronomic paradise celebrating South Kalimantan's diverse food traditions. For four days, traditional wooden boats laden with local delicacies create a unique floating food fair on the Martapura River.\n\nVisitors can sample authentic Banjarese specialties prepared by local cooks, including Soto Banjar (aromatic chicken soup), Ketupat Kandangan (rice cakes with coconut sauce), various river fish preparations, and sweet treats like Bingka Barandam (steamed cassava cake). Each dish reflects the rich culinary heritage shaped by the region's rivers and wetlands.\n\nCulinary demonstrations by master cooks reveal the secrets behind traditional Banjarese cooking techniques and spice blends. The festival also includes cooking competitions where local talents compete to create innovative dishes using traditional ingredients.\n\nBeyond eating, visitors can join guided tours of the traditional floating markets, learn about sustainable fishing practices in the region, and participate in traditional food preservation workshops. Evening events feature cultural performances that highlight the connection between Banjarese food traditions and the broader cultural context.\n\nThe Pasar Terapung Culinary Festival celebrates South Kalimantan's unique food culture while supporting local food producers and preserving culinary traditions that are intrinsically connected to the region's river-based way of life.",
  },
]