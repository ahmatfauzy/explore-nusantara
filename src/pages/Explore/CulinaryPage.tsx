import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { culinaryData } from "../../data/culinaryData";
import { CulinaryCards } from "../../components/CulinaryCards";

export default function CulinaryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredItems = culinaryData.slice(0, 3);

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-96 overflow-hidden">
        {featuredItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-3xl text-white">
                <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
                  {item.category === "food"
                    ? "Featured Food"
                    : "Featured Drink"}
                </p>
                <h2 className="text-4xl font-bold mb-2">{item.name}</h2>
                <p className="text-lg mb-6">{item.description}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-900 font-medium rounded hover:bg-blue-50 transition"
                >
                  DISCOVER MORE
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-blue-900 font-medium mb-2">
            CULINARY RECOMMENDATIONS
          </p>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-blue-900">
                Indonesian Culinary Delights
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Experience the rich flavors and unique tastes of Indonesian
                cuisine
              </p>
            </div>
          </div>
        </div>

        {/* All Culinary Items */}
        <CulinaryCards />
      </div>
    </div>
  );
}
