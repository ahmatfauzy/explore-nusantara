import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slideData } from "../data/dataSlide";
import { motion } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const ExploreIndo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slideData.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full text-white overflow-x-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('images/tempat/borobudur.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-90" />
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 flex flex-col justify-between">
            <div>
              <motion.div
                className="uppercase text-sm tracking-wider mb-2"
                variants={fadeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={0.1}
              >
                SPOTLIGHT
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight"
                variants={fadeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={0.2}
              >
                Discover Indonesia's Iconic Treasures
              </motion.h1>

              <motion.p
                className="mb-6 md:mb-8 text-base md:text-lg opacity-90"
                variants={fadeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={0.3}
              >
                Immerse yourself in Indonesia's vibrant culture through its
                unique handicrafts, rich traditions, and mouth-watering culinary
                delights.
              </motion.p>

              <motion.a
                href="/explore"
                className="border border-white px-6 py-3 inline-flex items-center group hover:bg-white hover:text-black transition-colors"
                variants={fadeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={0.4}
              >
                Explore Indonesia
                <span className="ml-2">→</span>
              </motion.a>
            </div>

            <motion.div
              className="mt-auto pt-10 flex items-center"
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              custom={0.5}
            >
              <div className="text-4xl font-bold mr-2">
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
              <div className="text-lg text-gray-400 mt-1">
                /{String(totalSlides).padStart(2, "0")}
              </div>

              <div className="ml-auto flex space-x-3">
                <button
                  onClick={prevSlide}
                  className="hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="hover:text-gray-300 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Fixed height container */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            custom={0.6}
          >
            <div className="overflow-hidden relative h-64 sm:h-80 md:h-96 lg:h-96">
              {slideData.map(
                (slide, index) =>
                  index === activeIndex && (
                    <a
                      key={slide.id}
                      href={slide.url}
                      className="block rounded-lg overflow-hidden h-full w-full transition-transform duration-500 hover:scale-[1.02]"
                    >
                      <div className="relative h-full">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: "center" }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-12">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                            {slide.title}
                          </h3>
                          <p className="text-sm md:text-base line-clamp-3 md:line-clamp-none">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExploreIndo;