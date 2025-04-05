import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);

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
    // Close info dropdown if mobile menu is toggled
    if (!isMobileMenuOpen) {
      setIsInfoDropdownOpen(false);
    }
  };

  const toggleInfoDropdown = () => {
    setIsInfoDropdownOpen(!isInfoDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("info-dropdown");
      const trigger = document.getElementById("info-trigger");

      if (
        isInfoDropdownOpen &&
        dropdown &&
        !dropdown.contains(event.target) &&
        trigger &&
        !trigger.contains(event.target)
      ) {
        setIsInfoDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInfoDropdownOpen]);

  // Animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
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
      y: -20,
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

  // Information cards data with specific links for each card
  const infoCards = [
    {
      title: "General Information",
      image: "/images/general-info.jpg",
      alt: "Tourists pointing at something interesting",
      link: "/information/general",
    },
    {
      title: "Travel E-Booklet & E-Brochure",
      image: "/images/travel-booklet.jpg",
      alt: "Woman on airplane with hat",
      link: "/information/travel-booklets",
    },
    {
      title: "Bali Regulations",
      image: "/images/borobudur.jpeg",
      alt: "Balinese ceremony with crowd",
      link: "/information/bali-regulations",
    },
    {
      title: "Brand Guidelines",
      image: "/images/brand-guidelines.jpg",
      alt: "Balinese temple gate",
      link: "/information/brand-guidelines",
    },
    {
      title: "Partnership Opportunity",
      image: "/images/partnership.jpg",
      alt: "Hands joining together",
      link: "/information/partnership",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={isScrolled ? "/icon1.png" : "/icon2.png"}
            alt="ExploreNusantara Logo"
            className="h-8 md:h-12 w-auto"
          />
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
              Home
            </a>
            <a
              href="/events"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Calendar of Events
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
                Essentials
                <ChevronDown
                  size={18}
                  className={`ml-1 transition-transform duration-300 ${
                    isInfoDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Information dropdown */}
              <AnimatePresence>
                {isInfoDropdownOpen && (
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
                            onClick={() => setIsInfoDropdownOpen(false)}
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

        {/* Mobile Menu Button with animation */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`md:hidden p-1 rounded-md transition-colors duration-300 ${
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

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden mt-4 py-4 px-4 bg-white rounded-lg"
          >
            <nav className="flex flex-col space-y-3">
              <motion.a
                href="/"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                className="text-black font-medium px-4 py-3 hover:bg-gray-100 hover:text-blue-600 rounded-md text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Home
              </motion.a>
              <motion.a
                href="/events"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                className="text-black font-medium px-4 py-3 hover:bg-gray-100 hover:text-blue-600 rounded-md text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calendar of Events
              </motion.a>
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <button
                  onClick={() => setIsInfoDropdownOpen(!isInfoDropdownOpen)}
                  className="w-full flex justify-between items-center text-black font-medium px-4 py-3 hover:bg-gray-100 hover:text-blue-600 rounded-md text-lg"
                >
                  Essentials
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isInfoDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isInfoDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-4"
                    >
                      <div className="pt-2 pb-2 flex flex-col space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 px-4">
                          The Wonders of Indonesia Celebrated Internationally
                        </h3>
                        {infoCards.map((card, index) => (
                          <a
                            key={index}
                            href={card.link}
                            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md group"
                            onClick={() => {
                              setIsInfoDropdownOpen(false);
                              setIsMobileMenuOpen(false);
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
                                Learn more <ArrowRight size={12} className="ml-1" />
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
    </header>
  );
};

export default Navbar;