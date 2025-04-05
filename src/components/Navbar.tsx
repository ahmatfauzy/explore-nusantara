import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo - Ukuran berbeda untuk mobile dan desktop */}
        <div className="flex items-center">
          <img
            src={isScrolled ? "/icon1.png" : "/icon2.png"}
            alt="ExploreNusantara Logo"
            className="h-8 md:h-12 w-auto" // h-8 untuk mobile, h-12 untuk desktop
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-10">
            <a
              href="#"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Calendar of Events
            </a>
            <a
              href="#"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Information Center
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-1 rounded-md transition-colors duration-300 ${
            isScrolled
              ? "text-black hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-2 bg-white rounded-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-black font-medium px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black font-medium px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-md"
            >
              Calendar of Events
            </a>
            <a
              href="#"
              className="text-black font-medium px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-md"
            >
              Information Center
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;