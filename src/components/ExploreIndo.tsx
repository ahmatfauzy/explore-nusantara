import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sunt laudantium odio delectus maiores labore nisi.",
    url: "/destinations",
    image: "/images/borobudur.jpeg"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quia illum ab itaque similique quo explicabo iusto quaerat amet!",
    url: "/culture",
    image: "/images/borobudur.jpeg"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui eum officiis dolore consequatur dignissimos porro, assumenda explicabo itaque architecto delectus.",
    url: "/culinary",
    image: "/images/borobudur.jpeg"
  }
];

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
    <div className="relative w-full text-white min-h-screen">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('images/borobudur.jpeg')" }}
      />
      
      {/* Dark overlay with pattern */}
      <div className="absolute inset-0 bg-black opacity-90"></div>
      
      {/* Indonesian pattern overlay with low opacity */}
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Content - kept full width */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 flex flex-col justify-between">
            <div>
              <div className="uppercase text-sm tracking-wider mb-2">SPOTLIGHT</div>
              <h1 className="text-5xl font-bold mb-8 leading-tight">
                Discover Indonesia's Iconic Treasures
              </h1>
              <p className="mb-8 text-lg opacity-90">
                Immerse yourself in Indonesia's vibrant culture through its unique handicrafts,
                rich traditions, and mouth-watering culinary delights.
              </p>
              
              <a href="/explore" className="border border-white px-6 py-3 inline-flex items-center group hover:bg-white hover:text-black transition-colors">
                Explore Indonesia 
                <span className="ml-2">→</span>
              </a>
            </div>
            
            {/* Pagination display at bottom */}
            <div className="mt-auto pt-10 flex items-center">
              <div className="text-4xl font-bold mr-2">
                {String(activeIndex + 1).padStart(2, '0')}
              </div>
              <div className="text-lg text-gray-400 mt-1">
                /{String(totalSlides).padStart(2, '0')}
              </div>
              
              {/* Navigation buttons */}
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
            </div>
          </div>

          {/* Right section with card */}
          <div className="lg:w-1/2">
            <div className="overflow-hidden relative h-full">
              {slideData.map((slide, index) => (
                index === activeIndex && (
                  <a 
                    key={slide.id}
                    href={slide.url}
                    className="block rounded-lg overflow-hidden h-full w-full transition-transform duration-500"
                  >
                    <div className="relative h-full">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-2xl font-bold mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-base">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreIndo;