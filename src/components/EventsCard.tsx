import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "../data/eventsDataHome";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

const EventsCards: React.FC = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleEventClick = (path: string) => {
    navigate(path);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section - Fixed to ensure button visibility */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        custom={0.1}
      >
        <div className="mb-4 md:mb-0">
          <h3 className="text-sm tracking-wider mb-2 uppercase text-blue-600">
            UPCOMING EVENT
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            The Special Occasion of the Year!
          </h2>
        </div>
        
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          custom={0.2}
        >
          <a 
            href="/events"
            className="inline-block border border-blue-600 px-6 py-2 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors"
          >
            Explore More Events →
          </a>
        </motion.div>
      </motion.div>

      {/* Mobile Arrows */}
      <motion.div
        className="flex justify-end mb-6 gap-3 md:hidden"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        custom={0.3}
      >
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>

      {/* Mobile Cards - Centered with proper spacing */}
      <div className="relative md:hidden">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollSnapType: 'x mandatory',
            scrollPadding: '0 50%',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Left spacer to center first card */}
          <div className="flex-shrink-0 w-[calc(50%-140px)]" />

          {events.map((event, index) => (
            <motion.div
              key={`mobile-${index}`}
              className="flex-shrink-0 w-[280px] mx-3 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg snap-start"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              custom={0.1 + index * 0.1}
              onClick={() => handleEventClick(event.path)}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 flex items-center">
                  <span className="mr-2">📅</span>
                  {event.date}
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="mr-2">📍</span>
                  {event.location}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Right spacer to center last card */}
          <div className="flex-shrink-0 w-[calc(50%-140px)]" />
        </div>
      </div>

      {/* Desktop Cards */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {events.map((event, index) => (
          <motion.div
            key={`desktop-${index}`}
            className="w-full h-[360px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            custom={0.1 + index * 0.1}
            onClick={() => handleEventClick(event.path)}
          >
            <div className="h-40 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                  {event.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 flex items-center">
                <span className="mr-2">📅</span>
                {event.date}
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="mr-2">📍</span>
                {event.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EventsCards;