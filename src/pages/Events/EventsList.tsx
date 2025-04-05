import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { eventsData } from "../../data/allEventsData";
import { categories } from "../../data/categories";

export default function EventsList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Featured events for the slider (using first 4 events in this example)
  const featuredEvents = eventsData.slice(0, 4);

  // Filter events when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredEvents(eventsData);
    } else {
      const filtered = eventsData.filter((event) =>
        event.category.toLowerCase().includes(activeCategory.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [activeCategory]);

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredEvents.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredEvents.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-96 overflow-hidden">
        {featuredEvents.map((event, index) => (
          <div
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-3xl text-white">
                <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
                  {event.category}
                </p>
                <h2 className="text-4xl font-bold mb-2">{event.title}</h2>
                <p className="text-lg mb-6">
                  {event.date} | {event.location}
                </p>
                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-900 font-medium rounded hover:bg-blue-50 transition"
                >
                  SEE EVENT DETAILS
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
            EVENT RECOMMENDATIONS
          </p>
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold text-blue-900">
              Discover Upcoming Events
            </h2>
            {/* <div className="flex space-x-2">
              <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded flex items-center">
                <span className="mr-2">List View</span>
              </button>
              <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded flex items-center">
                <span className="mr-2">Calendar View</span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/events/${event.id}`)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="text-sm">
                    {event.date} | {event.location}
                  </span>
                </div>
                <span className="inline-flex items-center text-blue-900 font-medium hover:underline">
                  See Details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
