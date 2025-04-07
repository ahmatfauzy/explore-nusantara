import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { locations } from "../data/locationsData";

// Filter categories for destinations
const regionCategories = [
  { key: "all", label: "All Regions" },
  { key: "java", label: "Java" },
  { key: "sumatra", label: "Sumatra" },
  { key: "bali", label: "Bali & Nusa Tenggara" },
  { key: "kalimantan", label: "Kalimantan" },
  { key: "sulawesi", label: "Sulawesi" },
  { key: "maluku", label: "Maluku & Papua" },
];

export function DestinationCards() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const navigate = useNavigate();

  // Filter destinations when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredLocations(locations);
    } else {
      // For demonstration purposes - in a real app you would add a region field to your data
      // This is a simplified example that filters based on name contents
      const filtered = locations.filter((location) => {
        if (activeCategory === "java" && 
            (location.name.includes("Borobudur") || location.name.includes("Bromo"))) {
          return true;
        }
        if (activeCategory === "sumatra" && 
            location.name.includes("Toba")) {
          return true;
        }
        if (activeCategory === "sulawesi" && 
            location.name.includes("Likupang")) {
          return true;
        }
        if (activeCategory === "maluku" && 
            location.name.includes("Morotai")) {
          return true;
        }
        if (activeCategory === "bali" && 
            location.name.includes("Mandalika")) {
          return true;
        }
        return false;
      });
      setFilteredLocations(filtered);
    }
  }, [activeCategory]);

  return (
    <>
      {/* Filter Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {regionCategories.map((category) => (
          <button
            key={category.key}
            className={`px-5 py-2 rounded-full flex items-center ${
              activeCategory === category.key
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveCategory(category.key)}
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
          </button>
        ))}
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(location.link)}
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
              <span className="inline-flex items-center text-blue-900 font-medium hover:underline">
                Explore Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}