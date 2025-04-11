import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cultureData } from "../../data/cultureData";
import { CultureCards } from "../../components/CultureCards";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export default function CulturePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredItems = cultureData.slice(0, 3);

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
                  {item.category
                    .charAt(0)
                    .toUpperCase() + item.category.slice(1).replace("-", " ")}
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
                  className="text-lg mb-6"
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
                    LEARN MORE
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <motion.div
          className="mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-blue-900 font-medium mb-2">
            CULTURAL RECOMMENDATIONS
          </p>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-blue-900">
                Experience Indonesian Culture
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Immerse yourself in Indonesia's rich and diverse cultural
                heritage
              </p>
            </div>
          </div>
        </motion.div>

        {/* All Culture Items */}
        <CultureCards />
      </div>
    </div>
  );
}
