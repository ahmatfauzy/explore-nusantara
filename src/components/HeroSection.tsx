import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  position: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Mandalika",
    description:
      "Along the south coast of the beautiful Lombok Island lies a long and wide stretch of beautiful white sand beach facing the glistening Indian Ocean.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 left-16",
  },
  {
    id: 2,
    name: "Borobudur",
    description:
      "A majestic 9th-century Buddhist temple in Central Java, recognized as the largest Buddhist temple in the world.",
    image: "/images/borobudur.jpeg",
    position: "top-1/3 right-16",
  },
  {
    id: 3,
    name: "Likupang",
    description:
      "A pristine coastal area in North Sulawesi with crystal clear waters and white sandy beaches perfect for diving and snorkeling.",
    image: "/images/borobudur.jpeg",
    position: "bottom-1/4 left-20",
  },
  {
    id: 4,
    name: "Lake Toba",
    description:
      "The largest volcanic lake in the world, located in North Sumatra, formed by a supervolcanic eruption.",
    image: "/images/borobudur.jpeg",
    position: "top-1/4 right-20",
  },
  {
    id: 5,
    name: "Tanjung Kelayang",
    description:
      "Famous for its unique granite rock formations and pristine beaches on Belitung Island.",
    image: "/images/borobudur.jpeg",
    position: "top-16 left-32",
  },
  {
    id: 6,
    name: "Bromo",
    description:
      "An active volcano in East Java offering breathtaking views, especially during sunrise.",
    image: "/images/borobudur.jpeg",
    position: "bottom-32 right-24",
  },
  {
    id: 7,
    name: "Morotai",
    description:
      "A hidden paradise in North Maluku with historical significance from World War II and stunning underwater scenery.",
    image: "/images/borobudur.jpeg",
    position: "bottom-1/3 left-1/4",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<number | null>(null);
  const bottomNavRef = useRef<HTMLDivElement>(null);

  // Auto-slide function
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    if (!isPaused) {
      autoplayTimerRef.current = window.setInterval(() => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % locations.length);
      }, 5000);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const pauseAutoplay = () => {
    setIsPaused(true);
  };

  const resumeAutoplay = () => {
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  const nextSlide = () => {
    pauseAutoplay();
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
    resumeAutoplay();
  };

  const prevSlide = () => {
    pauseAutoplay();
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + locations.length) % locations.length
    );
    resumeAutoplay();
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;

    pauseAutoplay();
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    resumeAutoplay();
  };

  const getVisibleLocations = () => {
    const result = [];
    const totalItems = locations.length;
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + totalItems) % totalItems;
      result.push(locations[index]);
    }
    
    return result;
  };

  // Animation variants
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exitRight: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exitLeft: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } }
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Background Image with Smooth Transition */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${locations[currentIndex].image})`,
          }}
        />
      </AnimatePresence>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />

      {/* Content Box with Slide Animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit={direction === "right" ? "exitLeft" : "exitRight"}
          className={`absolute max-w-md ${locations[currentIndex].position}`}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <motion.div
            className="p-6 rounded-lg bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              {locations[currentIndex].name}
            </h2>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-sm mb-3">
                {locations[currentIndex].description}
              </p>
              <a
                href="#"
                className="text-white text-xs border-b border-transparent hover:border-white inline-block transition-all duration-300"
              >
                Learn more
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center px-2">
        <button
          onClick={prevSlide}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 ease-out hover:scale-110 flex-shrink-0 z-10"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={bottomNavRef}
          className="flex-1 overflow-x-auto scrollbar-hide mx-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center w-max min-w-full justify-center space-x-8 md:space-x-12 px-4">
            {getVisibleLocations().map((location, i) => {
              const isMiddleItem = i === 2;

              return (
                <motion.div
                  key={`${location.id}-${i}`}
                  className={`text-center cursor-pointer relative px-3 ${
                    isMiddleItem ? "z-10" : "z-0"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isMiddleItem ? 1 : 0.7,
                    y: isMiddleItem ? -4 : 0,
                    scale: isMiddleItem ? 1.1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() =>
                    goToSlide(locations.findIndex((l) => l.id === location.id))
                  }
                  onMouseEnter={pauseAutoplay}
                  onMouseLeave={resumeAutoplay}
                >
                  <p
                    className={`font-semibold whitespace-nowrap ${
                      isMiddleItem
                        ? "text-white text-base"
                        : "text-gray-300 text-sm"
                    }`}
                  >
                    {location.name}
                  </p>

                  <motion.div 
                    className="relative h-0.5 mt-1 w-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: isMiddleItem ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white absolute left-0 right-0 h-full" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 ease-out hover:scale-110 flex-shrink-0 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;