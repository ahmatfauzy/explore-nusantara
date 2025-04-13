import { useState, useEffect, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Map, X } from "lucide-react";
import { locations, Location } from "../data/locationsData"; // Import the Location type
import { regionCategories } from "../data/regionCategories";
import { motion, AnimatePresence } from "framer-motion";

// Reusable animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

interface MapModalProps {
  isOpen: boolean;
  locationName: string;
  mapUrl: string;
  onClose: () => void;
}

// Map Modal Component
function MapModal({ isOpen, locationName, mapUrl, onClose }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">{locationName} Location</h3>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="w-full h-[70vh]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${locationName}`}
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Define the type for selected location state
interface SelectedLocation {
  id: number | null;
  name: string;
  mapUrl: string;
}

export function DestinationCards() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>({
    id: null,
    name: "",
    mapUrl: ""
  });
  const navigate = useNavigate();

  // Filter data based on category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredLocations(locations);
    } else {
      const filtered = locations.filter((location) => {
        if (
          activeCategory === "java" &&
          (location.name.includes("Borobudur") ||
            location.name.includes("Bromo"))
        ) {
          return true;
        }
        if (activeCategory === "sumatra" && location.name.includes("Toba")) {
          return true;
        }
        if (
          activeCategory === "sulawesi" &&
          location.name.includes("Likupang")
        ) {
          return true;
        }
        if (activeCategory === "maluku" && location.name.includes("Morotai")) {
          return true;
        }
        if (activeCategory === "bali" && location.name.includes("Mandalika")) {
          return true;
        }
        return false;
      });
      setFilteredLocations(filtered);
    }
  }, [activeCategory]);

  // Open map modal
  const openMapModal = (e: MouseEvent<HTMLButtonElement>, location: Location) => {
    e.stopPropagation(); // Prevent card click event
    setSelectedLocation({
      id: location.id,
      name: location.name,
      mapUrl: location.mapUrl
    });
    setIsMapOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close map modal
  const closeMapModal = () => {
    setIsMapOpen(false);
    setSelectedLocation({
      id: null,
      name: "",
      mapUrl: ""
    });
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  // Close modal if escape key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMapModal();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      {/* Filter Categories */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8"
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        {regionCategories.map((category, index) => (
          <motion.button
            key={category.key}
            className={`px-5 py-2 rounded-full flex items-center ${
              activeCategory === category.key
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveCategory(category.key)}
            variants={fadeUp}
            transition={{ delay: index * 0.08 }}
          >
            {category.key === "all" && (
              <span className="mr-2 rounded-full bg-blue-800 p-1">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </span>
            )}
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocations.map((location, index) => (
          <motion.div
            key={location.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(location.link)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {location.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {location.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center text-blue-900 font-medium hover:underline">
                  Explore Details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
                <button 
                  onClick={(e) => openMapModal(e, location)}
                  className="flex items-center text-green-600 hover:text-green-800"
                >
                  <Map className="h-5 w-5 mr-1" />
                  View Map
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map Modal */}
      <MapModal 
        isOpen={isMapOpen} 
        locationName={selectedLocation.name} 
        mapUrl={selectedLocation.mapUrl} 
        onClose={closeMapModal} 
      />
    </>
  );
}