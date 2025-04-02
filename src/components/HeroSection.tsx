import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [bottomHoverIndex, setBottomHoverIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle the slide transition animation
  useEffect(() => {
    if (currentIndex !== prevIndex) {
      setIsChanging(true);
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, prevIndex]);

  // Auto-slide fungsi
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    // auoplay
    if (!isPaused) {
      autoplayTimerRef.current = window.setInterval(() => {
        setPrevIndex(currentIndex);
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % locations.length);
      }, 5000);
    }

    // Clean up interval on unmount or when dependencies change
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  // Pause autoplay on user interaction or hover
  const pauseAutoplay = () => {
    setIsPaused(true);
  };

  // Resume autoplay after delay
  const resumeAutoplay = () => {
    // Add a slight delay before resuming autoplay
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  // User control functions
  const nextSlide = () => {
    pauseAutoplay();
    setPrevIndex(currentIndex);
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
    resumeAutoplay();
  };

  const prevSlide = () => {
    pauseAutoplay();
    setPrevIndex(currentIndex);
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + locations.length) % locations.length
    );
    resumeAutoplay();
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;

    pauseAutoplay();
    setPrevIndex(currentIndex);
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    resumeAutoplay();
  };

  const getVisibleLocations = () => {
    const visibleIndices = [];

    for (let i = -3; i <= 3; i++) {
      const index = (currentIndex + i + locations.length) % locations.length;
      visibleIndices.push(index);
    }

    return visibleIndices.map((index) => locations[index]);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Background Image with Fade/Zoom Animation */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center"
        style={{
          backgroundImage: `url(${locations[currentIndex].image})`,
          transform: isChanging ? "scale(1.05)" : "scale(1)",
          opacity: isChanging ? 0.8 : 1,
        }}
      />

      {/* Previous image for crossfade effect */}
      {isChanging && (
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-out opacity-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${locations[prevIndex].image})`,
            opacity: 0.5,
          }}
        />
      )}

      {/* Subtle overlay gradient (always present) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />

      {/* Main Content Box with Slide-in Animation */}
      <div
        className={`absolute max-w-md transition-all duration-700 ease-out ${
          locations[currentIndex].position
        } ${
          isChanging
            ? direction === "right"
              ? "-translate-x-16 opacity-0"
              : "translate-x-16 opacity-0"
            : "translate-x-0 opacity-100"
        }`}
        onMouseEnter={() => {
          setIsHovering(true);
          pauseAutoplay();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          resumeAutoplay();
        }}
      >
        <div
          className={`p-6 rounded-lg transition-all duration-500 ease-out ${
            isHovering
              ? "bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm shadow-lg transform scale-105"
              : "bg-transparent"
          }`}
        >
          {/* Smaller title text */}
          <h2
            className={`text-3xl font-bold mb-2 transition-all duration-300 ${
              isHovering ? "text-white" : "text-white drop-shadow-lg"
            }`}
          >
            {locations[currentIndex].name}
          </h2>

          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isHovering ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Smaller description text */}
            <p className="text-white text-sm mb-3">
              {locations[currentIndex].description}
            </p>
            <a
              href="#"
              className="text-white text-xs border-b border-transparent hover:border-white inline-block transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation with Slide-up Animation */}
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-6 transition-all duration-700 ease-out"
        style={{
          transform: isChanging ? "translateY(16px)" : "translateY(0)",
          opacity: isChanging ? 0.7 : 1,
        }}
      >
        <button
          onClick={prevSlide}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 ease-out hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          className="flex space-x-8 items-center overflow-hidden"
          ref={sliderRef}
        >
          {getVisibleLocations().map((location) => {
            const isActive = location.id === locations[currentIndex].id;

            return (
              <div
                key={location.id}
                className="text-center cursor-pointer relative transition-all duration-500 ease-out"
                style={{
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                }}
                onClick={() =>
                  goToSlide(locations.findIndex((l) => l.id === location.id))
                }
                onMouseEnter={() => {
                  setBottomHoverIndex(location.id);
                  pauseAutoplay();
                }}
                onMouseLeave={() => {
                  setBottomHoverIndex(null);
                  resumeAutoplay();
                }}
              >
                <p
                  className={`font-semibold transition-all duration-300 ${
                    isActive ? "text-white text-base" : "text-gray-300 text-sm"
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

                <div className="h-6 relative">
                  {bottomHoverIndex === location.id && (
                    <a
                      href="#"
                      className="text-white text-xs absolute top-0 left-0 right-0 text-center transition-all duration-300 ease-out"
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

        <button
          onClick={nextSlide}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 ease-out hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
