import { useState } from "react";
import { Culinary, culinaryData } from "../data/culinaryData"; // Assuming this is your data file path

const CulinarySection = () => {
  const [displayCulinary] = useState<Culinary[]>(culinaryData.slice(0, 4));

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            TASTE OF INDONESIA
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">
            Authentic Culinary Experience
          </h1>
        </div>
        <a
          href="/culinary"
          className="text-blue-600 font-medium hover:text-blue-800 mt-4 md:mt-0 flex items-center"
        >
          Explore More Dishes →
        </a>
      </div>

      {/* Culinary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayCulinary.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* Food Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Food Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                  {item.category}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {item.region}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.description}
              </p>
              <a
                href={item.link}
                className="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                See recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulinarySection;