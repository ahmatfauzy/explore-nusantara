import { useState} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { locations } from "../../data/locationsData";
import { DestinationCards } from "../../components/DestinationCards";

export default function DestinationsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredDestinations = locations.slice(0, 3);

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredDestinations.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredDestinations.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-96 overflow-hidden">
        {featuredDestinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${destination.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-3xl text-white">
                <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
                  Featured Destination
                </p>
                <h2 className="text-4xl font-bold mb-2">{destination.name}</h2>
                <p className="text-lg mb-6">{destination.description}</p>
                <Link
                  to={destination.link}
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-900 font-medium rounded hover:bg-blue-50 transition"
                >
                  EXPLORE DESTINATION
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
            DESTINATION RECOMMENDATIONS
          </p>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-blue-900">
                Explore Indonesian Destinations
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Discover the beauty and diversity of Indonesia's top travel
                destinations
              </p>
            </div>
          </div>
        </div>

        {/* All Destinations */}
        <DestinationCards />
      </div>
    </div>
  );
}
