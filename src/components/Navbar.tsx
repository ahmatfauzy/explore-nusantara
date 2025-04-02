import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className={`font-bold text-xl transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            JelajahIndonesia
          </span>
          <img 
            src="/images/indonesia-logo.png" 
            alt="Wonderful Indonesia" 
            className="h-10"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/100x40?text=Indonesia';
            }} 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-8">
            <a 
              href="#" 
              className={`font-medium hover:opacity-80 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Home
            </a>
            <a 
              href="#" 
              className={`font-medium hover:opacity-80 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Calendar of Events
            </a>
            <a 
              href="#" 
              className={`font-medium hover:opacity-80 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Information Center
            </a>
            <a 
              href="#" 
              className={`font-medium hover:opacity-80 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Essentials
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-1 rounded-md transition-colors duration-300 ${
            isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-2 bg-white rounded-lg shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-black font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
              Home
            </a>
            <a href="#" className="text-black font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
              Calendar of Events
            </a>
            <a href="#" className="text-black font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
              Information Center
            </a>
            <a href="#" className="text-black font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
              Essentials
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
