import { useState } from "react";
import { Culture, cultureData } from "../data/cultureData"; // Assuming this is your data file path

const CultureSection = () => {
  const [displayCultures] = useState<Culture[]>(cultureData.slice(0, 4));

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            INDONESIAN HERITAGE
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">
            Immerse in Our Culture
          </h1>
        </div>
        <a
          href="/culture"
          className="text-blue-600 font-medium hover:text-blue-800 mt-4 md:mt-0 flex items-center"
        >
          Explore More Cultural Experiences →
        </a>
      </div>

      {/* Culture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayCultures.map((culture) => (
          <div
            key={culture.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* Culture Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={culture.image}
                alt={culture.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Culture Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                  {culture.category}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {culture.region}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {culture.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {culture.description}
              </p>
              <a
                href={culture.link}
                className="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureSection;
