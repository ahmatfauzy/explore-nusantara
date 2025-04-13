import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { locations } from "../data/locationsData";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [bottomHoverIndex, setBottomHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  // New state for cursor position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const autoplayTimerRef = useRef<number | null>(null);
  const bottomNavRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to container
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        // Update mouse position with some delay for smoothness
        setMousePosition({
          x: x,
          y: y,
        });
      }
    };

    // Only add the mouse move listener if not mobile
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Auto-slide function
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    if (!isPaused) {
      // Fix the number assignment to window.setInterval
      const timerId = window.setInterval(() => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % locations.length);
      }, 5000);
      // Assign the numeric timer ID to the ref
      autoplayTimerRef.current = timerId;
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  // Center active item in bottom navigation
  useEffect(() => {
    if (sliderRef.current && bottomNavRef.current) {
      const activeItem = sliderRef.current.querySelector(
        '[data-active="true"]'
      );
      if (activeItem) {
        const container = bottomNavRef.current;
        const containerWidth = container.offsetWidth;
        const activeItemRect = activeItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const scrollLeft =
          activeItemRect.left -
          containerRect.left -
          containerWidth / 2 +
          activeItemRect.width / 2;
        container.scrollTo({
          left: container.scrollLeft + scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, isMobile]);

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

    // On mobile, show only 3 items (1 before, current, 1 after)
    const itemsToShow = isMobile ? 3 : 5;
    const halfItems = Math.floor(itemsToShow / 2);

    for (let i = -halfItems; i <= halfItems; i++) {
      const index = (currentIndex + i + totalItems) % totalItems;
      result.push(locations[index]);
    }

    return result;
  };

  // Animation variants
  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: {
      x: "0",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exitRight: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exitLeft: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  };

  // Should show description - always show on mobile, or when hovered on desktop
  const shouldShowDescription =
    isMobile || hoveredLocation === locations[currentIndex].id;

  // Calculate background image position based on mouse movement
  // Limit the movement to a small range (e.g., 5%)
  const backgroundPosition = isMobile
    ? "center center"
    : `${50 + (mousePosition.x - 0.5) * -10}% ${
        50 + (mousePosition.y - 0.5) * -10
      }%`;

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Background Image with Smooth Transition and cursor following */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${locations[currentIndex].image})`,
            backgroundPosition: backgroundPosition,
            transition: "background-position 0.5s ease-out",
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
          className={`absolute max-w-md ${
            isMobile
              ? "inset-x-0 mx-auto top-1/3 px-4"
              : locations[currentIndex].position
          }`}
          onMouseEnter={() => {
            setHoveredLocation(locations[currentIndex].id);
            pauseAutoplay();
          }}
          onMouseLeave={() => {
            setHoveredLocation(null);
            resumeAutoplay();
          }}
        >
          <motion.div
            className={`p-6 rounded-lg transition-all duration-300 ${
              shouldShowDescription
                ? "bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm shadow-lg"
                : "bg-transparent"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              {locations[currentIndex].name}
            </h2>

            {shouldShowDescription && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-sm mb-3">
                  {locations[currentIndex].description}
                </p>
                <a
                  href={locations[currentIndex].link}
                  className="text-white text-xs border-b border-transparent hover:border-white inline-block transition-all duration-300"
                >
                  Learn more
                </a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <div className="w-full max-w-4xl flex items-center px-4">
          <button
            onClick={prevSlide}
            className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 ease-out hover:scale-110 flex-shrink-0 z-10 mr-2"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={bottomNavRef}
            className="flex-1 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div
              className="flex items-center w-max min-w-full justify-center space-x-4 md:space-x-8 px-2"
              ref={sliderRef}
            >
              {getVisibleLocations().map((location) => {
                const isActive = location.id === locations[currentIndex].id;
                return (
                  <div
                    key={location.id}
                    data-active={isActive}
                    className={`text-center cursor-pointer relative transition-all duration-300 px-2 ${
                      isActive ? "z-10" : "z-0"
                    }`}
                    style={{
                      transform: isActive
                        ? "translateY(-4px)"
                        : "translateY(0)",
                      opacity: isActive ? 1 : 0.7,
                    }}
                    onClick={() =>
                      goToSlide(
                        locations.findIndex((l) => l.id === location.id)
                      )
                    }
                    onMouseEnter={() => {
                      // Fix type issue with proper assignment
                      setBottomHoverIndex(location.id);
                      pauseAutoplay();
                    }}
                    onMouseLeave={() => {
                      setBottomHoverIndex(null);
                      resumeAutoplay();
                    }}
                  >
                    {/* Triangle indicator pointing down for active item */}
                    {isActive && (
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
                      </div>
                    )}

                    <p
                      className={`font-semibold transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "text-white text-base"
                          : "text-gray-300 text-sm"
                      }`}
                    >
                      {location.name}
                    </p>

                    {/* Animated underline indicator */}
                    <div className="relative h-0.5 mt-1 w-full overflow-hidden">
                      <div
                        className={`bg-white absolute left-0 right-0 h-full transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </div>

                    {/* Only show "Learn more" on hover with unique link */}
                    <div className="h-6 relative">
                      {bottomHoverIndex === location.id && (
                        <a
                          href={location.link}
                          className="text-white text-xs absolute top-0 left-0 right-0 text-center transition-all duration-300 ease-out whitespace-nowrap"
                          style={{
                            opacity: bottomHoverIndex === location.id ? 1 : 0,
                            transform:
                              bottomHoverIndex === location.id
                                ? "translateY(0)"
                                : "translateY(8px)",
                          }}
                        >
                          Learn more
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 ease-out hover:scale-110 flex-shrink-0 z-10 ml-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 767px) {
          .bottom-nav-item {
            min-width: 100px;
          }
        }
        /* Triangle CSS */
        .border-l-6 {
          border-left-width: 6px;
        }
        .border-r-6 {
          border-right-width: 6px;
        }
        .border-t-6 {
          border-top-width: 6px;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
