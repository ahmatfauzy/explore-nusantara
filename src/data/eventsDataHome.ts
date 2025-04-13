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
    id: 1,
    category: "Arts",
    title: "Lom Plai Traditional and Cultural Festival",
    date: "Apr 01 - May 31, 2025",
    location: "Kutai Kartanegara, East Kalimantan",
    image: "/images/events/lompai.png",
    path: "/events/lom-plai-festival-2025",
    text: "Experience the rich cultural heritage of East Kalimantan at the Lom Plai Traditional and Cultural Festival. This two-month celebration showcases the unique traditions of the Kutai people and other indigenous groups from the region. Visitors can witness captivating dance performances, traditional music concerts, and ancient ceremonies that have been preserved for generations.\n\nThe festival features the Erau ritual, a sacred ceremony that historically marked the coronation of Kutai sultans and now serves as a thanksgiving celebration. During this time, the spirits of ancestors are honored through complex rituals performed by cultural practitioners.\n\nArtisans from across Kalimantan display traditional crafts including intricate beadwork, wood carving, and textile weaving. Workshops offer hands-on experiences in these traditional art forms, allowing visitors to learn directly from master craftspeople.\n\nCulinary demonstrations highlight the unique flavors of East Kalimantan cuisine, with opportunities to taste local specialties like Kepiting Soka (soft-shell crab), Ayam Kampung Bakar (grilled free-range chicken), and various river fish preparations.\n\nThe Lom Plai Festival represents a meaningful cultural exchange that helps preserve the heritage of East Kalimantan while introducing these traditions to a broader audience.",
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