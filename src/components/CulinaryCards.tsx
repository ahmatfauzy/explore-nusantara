import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { culinaryData } from "../data/culinaryData";

// Filter categories for culinary
const culinaryCategories = [
  { key: "all", label: "All Items" },
  { key: "food", label: "Food" },
  { key: "drink", label: "Drinks" },
];

export function CulinaryCards() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(culinaryData);
  const navigate = useNavigate();

  // Filter items when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(culinaryData);
    } else {
      const filtered = culinaryData.filter(
        (item) => item.category === activeCategory
      );
      setFilteredItems(filtered);
    }
  }, [activeCategory]);

  return (
    <>
      {/* Filter Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {culinaryCategories.map((category) => (
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

      {/* Culinary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-sm text-blue-600 font-medium">
                  {item.category === "food" ? "Food" : "Drink"} • {item.region}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.description}
              </p>
              <span className="inline-flex items-center text-blue-900 font-medium hover:underline">
                View Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
