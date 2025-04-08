import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const [isEssentialsOpen, setIsEssentialsOpen] = useState(false);

  const toggleEssentials = () => {
    setIsEssentialsOpen(!isEssentialsOpen);
  };

  // Essentials dropdown menu items
  const essentialsItems = [
    {
      title: "Visa & Entry Requirements",
      url: "/information/visa-requirements",
    },
    { title: "Travel Checklist", url: "/information/travel-checklist" },
    { title: "Currency & Payment", url: "/information/currency-payment" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Upper footer section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Logo and description */}
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <img src="/icon2.png" alt="Logo" className="h-12 mr-3" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Discover the beauty of Indonesia through our curated travel
              experiences. Explore breathtaking destinations and immerse
              yourself in diverse cultures.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:w-64">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition duration-150"
              >
                Home
              </a>
              <a
                href="/explore"
                className="text-gray-300 hover:text-white transition duration-150"
              >
                Explore Indonesia
              </a>
              <a
                href="/events"
                className="text-gray-300 hover:text-white transition duration-150"
              >
                Calendar of Events
              </a>

              {/* Essentials Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleEssentials}
                  className="flex items-center text-gray-300 hover:text-white transition duration-150"
                >
                  Essentials
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-200 ${
                      isEssentialsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isEssentialsOpen && (
                  <div className="mt-1 bg-gray-800 rounded py-2 px-3 absolute z-10 min-w-40">
                    {essentialsItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        className="block py-1.5 text-gray-300 hover:text-white text-sm"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="md:w-64">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Jl Mataram No 9 Pesurungan Lor Kota Tegal</p>
              <p>Phone: +62 123-4567-8910</p>
            </address>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-400 mb-5">©Copyright 2025</p>
          {/* <div className="mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white mr-4"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
