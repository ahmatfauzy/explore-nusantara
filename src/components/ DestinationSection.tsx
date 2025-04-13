import { useState } from "react";
import { Location, locations } from "../data/locationsData"; 

const DestinationSection = () => {
  const [displayLocations] = useState<Location[]>(locations.slice(0, 4));

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            MUST-VISIT PLACES
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">
            Wonderful Destinations
          </h1>
        </div>
        <a
          href="/destinations"
          className="text-blue-600 font-medium hover:text-blue-800 mt-4 md:mt-0 flex items-center"
        >
          Explore More Destinations →
        </a>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayLocations.map((location) => (
          <div
            key={location.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* Destination Image */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Destination Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {location.description}
              </p>
              <a
                href={location.link}
                className="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Discover more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSection;