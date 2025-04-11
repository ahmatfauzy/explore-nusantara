import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Location, locations } from "../../data/locationsData";
import { Culture, cultureData } from "../../data/cultureData";
import { Culinary, culinaryData } from "../../data/culinaryData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const ExplorePage = () => {
  const [displayLocations] = useState<Location[]>(locations.slice(0, 4));
  const [displayCultures] = useState<Culture[]>(cultureData.slice(0, 4));
  const [displayCulinary] = useState<Culinary[]>(culinaryData.slice(0, 4));
  const navigate = useNavigate();

  const featuredItems = locations.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === featuredItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length]);

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
                <motion.p
                  className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2"
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.1 }}
                >
                  Featured Destination
                </motion.p>
                <motion.h2
                  className="text-4xl font-bold mb-2"
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.name}
                </motion.h2>
                <motion.p
                  className="text-lg mb-6 line-clamp-2"
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to={item.link}
                    className="inline-flex items-center px-4 py-2 bg-white text-blue-900 font-medium rounded hover:bg-blue-50 transition"
                  >
                    EXPLORE DESTINATION
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
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

      {/* Destinations Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-blue-900 font-medium mb-2">
              TRAVEL RECOMMENDATIONS
            </p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-blue-900">
                Wonderful Destinations
              </h2>
              <Link
                to="/destinations"
                className="text-blue-900 font-medium hover:underline flex items-center"
              >
                Explore More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayLocations.map((location, index) => (
              <motion.div
                key={location.id}
                onClick={() => navigate(location.link)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.1 * (index % 4), duration: 0.6 }}
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
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {location.description}
                  </p>
                  <span className="inline-flex items-center text-blue-900 font-medium hover:underline">
                    Discover more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-blue-900 font-medium mb-2">
              CULTURAL EXPERIENCES
            </p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-blue-900">
                Immerse in Our Culture
              </h2>
              <Link
                to="/culture"
                className="text-blue-900 font-medium hover:underline flex items-center"
              >
                Explore More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayCultures.map((culture, index) => (
              <motion.div
                key={culture.id}
                onClick={() => navigate(culture.link)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.1 * (index % 4), duration: 0.6 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={culture.image}
                    alt={culture.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-blue-600 font-medium">
                      {culture.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">
                      {culture.region}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {culture.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {culture.description}
                  </p>
                  <span className="inline-flex items-center text-blue-900 font-medium hover:underline">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-blue-900 font-medium mb-2">
              TASTE OF INDONESIA
            </p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-blue-900">
                Authentic Culinary Experience
              </h2>
              <Link
                to="/culinary"
                className="text-blue-900 font-medium hover:underline flex items-center"
              >
                Explore More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayCulinary.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => navigate(item.link)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.1 * (index % 4), duration: 0.6 }}
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
                      {item.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">{item.region}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center text-blue-900 font-medium hover:underline">
                    See recipe
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
