import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { infoCards, InfoCard } from "../data/info";
import { culinaryData, Culinary } from "../data/culinaryData";
import { cultureData, Culture } from "../data/cultureData";
import { eventsData, Event } from "../data/allEventsData";
import { locations, Location } from "../data/locationsData"; 


type SearchItem = Culinary | Culture | Event | Location | InfoCard; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsInfoDropdownOpen(false);
    }
  };

  const toggleInfoDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInfoDropdownOpen((prevState) => !prevState);
  };

  const toggleMobileInfoDropdown = () => {
    setIsInfoDropdownOpen(!isInfoDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
    setSearchResults([]);

    if (!isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    const cultureResults = cultureData.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.region.toLowerCase().includes(lowerQuery)
    );

    const culinaryResults = culinaryData.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.region.toLowerCase().includes(lowerQuery)
    );

    const eventResults = eventsData
      .filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery) ||
          item.location.toLowerCase().includes(lowerQuery) ||
          item.text.toLowerCase().includes(lowerQuery)
      )
      .map((event) => ({
        ...event,
        link: event.path, 
      }));

    const locationResults = locations
      .filter(
        (item) =>
          item.name.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery)
      )
      .map((location) => ({
        ...location,
        category: "Destination", 
      }));

    const infoResults = infoCards
      .filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery) ||
          (item.text && item.text.toLowerCase().includes(lowerQuery))
      )
      .map((card, index) => ({
        ...card,
        id: index,
        category: "Information", 
      }));

    setSearchResults([
      ...cultureResults,
      ...culinaryResults,
      ...eventResults,
      ...locationResults,
      ...infoResults,
    ]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("info-dropdown");
      const trigger = document.getElementById("info-trigger");
      const mobileDropdown = document.getElementById(
        "mobile-essentials-content"
      );
      const mobileTrigger = document.getElementById("mobile-essentials-btn");

      if (
        isInfoDropdownOpen &&
        dropdown &&
        !dropdown.contains(event.target as Node) &&
        trigger &&
        !trigger.contains(event.target as Node) &&
        !isMobileMenuOpen 
      ) {
        setIsInfoDropdownOpen(false);
      }

      if (
        isMobileMenuOpen &&
        isInfoDropdownOpen &&
        mobileDropdown &&
        !mobileDropdown.contains(event.target as Node) &&
        mobileTrigger &&
        !mobileTrigger.contains(event.target as Node)
      ) {
        // Don't close the dropdown here - we'll let the button handle it
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInfoDropdownOpen, isMobileMenuOpen]);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const searchPanelVariants = {
    hidden: {
      opacity: 0,
      y: "-5%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: "-5%",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };


  const getItemTitle = (item: SearchItem): string => {
    if ("name" in item && typeof item.name === "string") {
      return item.name;
    } else if ("title" in item && typeof item.title === "string") {
      return item.title;
    }
    return "Untitled";
  };

  const getItemDescription = (item: SearchItem): string => {
    if ("description" in item && typeof item.description === "string") {
      return item.description;
    } else if ("text" in item && typeof item.text === "string") {
      return item.text;
    }
    return "";
  };

  const getItemUrl = (item: SearchItem): string => {
    if ("link" in item && item.link) {
      return item.link;
    } else if ("path" in item) {
      return (item as Event).path;
    }
    return "#";
  };

  const getItemCategory = (item: SearchItem): string => {
    if ("category" in item && typeof item.category === "string") {
      return item.category;
    }
    return "";
  };

  const isLocation = (item: SearchItem): item is Location => {
    return "mapUrl" in item;
  };

  const isEvent = (item: SearchItem): item is Event => {
    return "title" in item && "date" in item && "location" in item;
  };

  const hasRegion = (item: SearchItem): item is Culinary | Culture => {
    return "region" in item;
  };

  const isInfoCard = (item: SearchItem): item is InfoCard => {
    return "alt" in item && "description" in item && "link" in item;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={isScrolled ? "/icon1.png" : "/icon2.png"}
              alt="ExploreNusantara Logo"
              className="h-8 md:h-12 w-auto"
            />
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-10">
            <a
              href="/"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              HOME
            </a>
            <a
              href="/explore"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              EXPLORE INDONESIA
            </a>
            <a
              href="/events"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              CALENDER OF EVENTS
            </a>
            {/* Information Center with dropdown */}
            <div className="relative">
              <button
                id="info-trigger"
                onClick={toggleInfoDropdown}
                className={`flex items-center text-lg font-semibold transition-colors duration-300 ${
                  isScrolled
                    ? "text-black hover:text-blue-600"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                ESSENTIALS
                <ChevronDown
                  size={18}
                  className={`ml-1 transition-transform duration-300 ${
                    isInfoDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Information dropdown */}
              <AnimatePresence>
                {isInfoDropdownOpen && !isMobileMenuOpen && (
                  <motion.div
                    id="info-dropdown"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute right-0 mt-6 bg-white rounded-lg shadow-xl z-50"
                    style={{ width: "800px", maxWidth: "calc(100vw - 40px)" }}
                  >
                    <div className="p-6">
                      <motion.div variants={cardVariants} className="mb-4">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">
                          The Wonders of Indonesia Celebrated Internationally
                        </h3>
                      </motion.div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {infoCards.map((card, index) => (
                          <motion.a
                            key={index}
                            href={card.link}
                            variants={cardVariants}
                            className="relative overflow-hidden rounded-lg group cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsInfoDropdownOpen(false);
                            }}
                          >
                            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                              <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                              <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                <h4 className="text-white font-semibold text-lg mb-1">
                                  {card.title}
                                </h4>
                                <div className="flex items-center text-white text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                  <span className="mr-1">Learn more</span>
                                  <ArrowRight size={16} />
                                </div>
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>

        {/* Search button - desktop */}
        <div className="hidden md:flex">
          <button
            onClick={toggleSearch}
            className={`p-2 rounded-full transition-colors duration-300 ml-6 ${
              isScrolled
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Search"
          >
            <Search size={22} />
          </button>
        </div>

        {/* Mobile Menu Button with animation */}
        <div className="md:hidden flex items-center">
          {/* Search button - mobile */}
          <button
            onClick={toggleSearch}
            className={`p-2 mr-2 transition-colors duration-300 ${
              isScrolled
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`p-1 rounded-md transition-colors duration-300 ${
              isScrolled
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 pt-24 pb-6 px-6 overflow-y-auto"
          >
            {/* Close button at the top right */}
            <button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Logo at the top left */}
            <a href="/">
              <div className="absolute top-6 left-6">
                <img
                  src="/icon1.png"
                  alt="ExploreNusantara Logo"
                  className="h-8 w-auto"
                />
              </div>
            </a>

            {/* Menu items */}
            <nav className="flex flex-col space-y-4 mt-6">
              <motion.a
                href="/"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                className="text-black font-medium py-3 hover:bg-gray-100 hover:text-blue-600 rounded-md text-lg px-4"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                HOME
              </motion.a>

              <motion.a
                href="/explore"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                className="text-black font-medium py-3 hover:bg-gray-100 hover:text-blue-600 rounded-md text-lg px-4"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                EXPLORE INDONESIA
              </motion.a>

              <motion.a
                href="/events"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                className="text-black font-medium py-3 hover:bg-gray-100 hover:text-blue-600 rounded-md text-lg px-4"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                CALENDER OF EVENTS
              </motion.a>

              {/* Essentials menu item with dropdown */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                className="flex flex-col"
              >
                {/* The Essentials button/title */}
                <button
                  id="mobile-essentials-btn"
                  className="w-full flex justify-between items-center text-black font-medium py-3 hover:bg-gray-100 hover:text-blue-600 rounded-md text-lg px-4"
                  onClick={toggleMobileInfoDropdown}
                >
                  ESSENTIALS
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isInfoDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* The expanded content for Essentials */}
                <AnimatePresence>
                  {isInfoDropdownOpen && isMobileMenuOpen && (
                    <motion.div
                      id="mobile-essentials-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-4"
                    >
                      <div className="pt-2 pb-4 flex flex-col space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 px-4">
                          The Wonders of Indonesia Celebrated Internationally
                        </h3>
                        {infoCards.map((card, index) => (
                          <a
                            key={index}
                            href={card.link}
                            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md group"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsInfoDropdownOpen(false);
                            }}
                          >
                            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                              <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium transform transition-transform duration-300 group-hover:translate-y-0">
                                {card.title}
                              </span>
                              <span className="text-xs text-blue-600 flex items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Learn more{" "}
                                <ArrowRight size={12} className="ml-1" />
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Search Panel */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={searchPanelVariants}
            className="fixed top-0 left-0 w-full h-full bg-white z-50 pt-24 pb-6 px-6 overflow-y-auto"
          >
            {/* Close button at the top right */}
            <button
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              onClick={toggleSearch}
              aria-label="Close search"
            >
              <X size={24} />
            </button>

            {/* Logo at the top left */}
            <a href="/">
              <div className="absolute top-6 left-6">
                <img
                  src="/icon1.png"
                  alt="ExploreNusantara Logo"
                  className="h-8 w-auto"
                />
              </div>
            </a>

            {/* Search input */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search destinations, culture, events, or information"
                  className="w-full py-4 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Search results */}
              <div className="mt-8">
                {searchQuery.trim() !== "" && (
                  <h2 className="text-xl font-semibold mb-6">
                    {searchResults.length === 0
                      ? "No results found"
                      : `Search results for "${searchQuery}"`}
                  </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((item) => (
                    <motion.a
                      key={`${getItemTitle(item)}-${item.id}`}
                      href={getItemUrl(item)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                      onClick={toggleSearch}
                    >
                      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img
                          src={item.image}
                          alt={getItemTitle(item)}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                            {getItemTitle(item)}
                          </h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                            {getItemCategory(item)}
                          </span>
                        </div>
                        {isEvent(item) && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">When:</span>{" "}
                            {item.date}
                          </p>
                        )}
                        {isEvent(item) && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Where:</span>{" "}
                            {item.location}
                          </p>
                        )}
                        {hasRegion(item) && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Region:</span>{" "}
                            {item.region}
                          </p>
                        )}
                        {isLocation(item) && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Destination:</span>{" "}
                            Indonesia
                          </p>
                        )}
                        {isInfoCard(item) && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Travel Guide:</span>{" "}
                            Essential Information
                          </p>
                        )}
                        <p className="text-sm text-gray-600 line-clamp-3 mt-2">
                          {getItemDescription(item).substring(0, 150)}...
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* No search query yet - Show featured content */}
              {searchQuery.trim() === "" && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-6">
                    Popular Discoveries
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Featured item 1 */}
                    <a
                      href="/events/bali-arts-festival-2025"
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                      onClick={toggleSearch}
                    >
                      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                        <img
                          src="/images/events/bali-arts.png"
                          alt="Bali Arts Festival"
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-semibold text-lg mb-1">
                          Bali Arts Festival
                        </h4>
                        <p className="text-white/80 text-sm">
                          Jun 14 - Jul 12, 2025
                        </p>
                      </div>
                    </a>
                    {/* Featured location */}
                    <a
                      href="/destination/borobudur"
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                      onClick={toggleSearch}
                    >
                      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                        <img
                          src="/images/tempat/borobudur.jpeg"
                          alt="Borobudur Temple"
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-semibold text-lg mb-1">
                          Borobudur Temple
                        </h4>
                        <p className="text-white/80 text-sm">Central Java</p>
                      </div>
                    </a>
                    {/* Featured item 3 */}
                    <a
                      href="/culture/wayang-kulit"
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                      onClick={toggleSearch}
                    >
                      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                        <img
                          src="https://i.pinimg.com/736x/d0/39/7b/d0397b752a24db2bd60fcb9863cdf99a.jpg"
                          alt="Wayang Kulit"
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-semibold text-lg mb-1">
                          Wayang Kulit
                        </h4>
                        <p className="text-white/80 text-sm">
                          Traditional Shadow Puppet Theatre
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
