import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { locations } from "../../data/locationsData";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function DestinationDetail() {
  const { destinationPath } = useParams();
  const navigate = useNavigate();

  const currentIndex = locations.findIndex(
    (loc) => loc.link === `/destination/${destinationPath}`
  );
  
  const destination = currentIndex !== -1 ? locations[currentIndex] : null;
  
  const prevItem = currentIndex > 0 ? locations[currentIndex - 1] : null;
  const nextItem = currentIndex < locations.length - 1 ? locations[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Destination not found</h2>
        <button
          onClick={() => navigate("/destinations")}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Back to Destinations
        </button>
      </div>
    );
  }

  const detailedContent = `
    ${destination.name} is one of Indonesia's most spectacular destinations. The area offers visitors a chance to experience the natural beauty and cultural richness that Indonesia is famous for.

    Visitors can enjoy a variety of activities here, from exploring natural landscapes to participating in local cultural events. The location is also known for its warm hospitality and delicious local cuisine.

    Throughout the year, various events and festivals take place here, making it an exciting destination regardless of when you visit. Local guides can help you navigate the area and provide deeper insights into its history and significance.

    For the best experience, consider visiting during the dry season when weather conditions are optimal for outdoor activities. Many accommodations range from luxury resorts to budget-friendly homestays, catering to all types of travelers.
  `;

  const handleNavigation = (path?: string) => {
    if (path) {
      const newPath = path.replace('/destination/', '');
      navigate(`/destination/${newPath}`);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="h-96 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${destination.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="text-white max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <button
              onClick={() => navigate("/destinations")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Destinations
            </button>

            <motion.p
              className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              Featured Destination
            </motion.p>

            <motion.h1
              className="text-4xl font-bold mb-3"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              {destination.name}
            </motion.h1>

            <motion.p
              className="text-lg"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              {destination.description}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Destination Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-gray-800"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Destination Details
          </motion.h2>

          {/* Paragraphs */}
          <div className="prose prose-lg max-w-none">
            {detailedContent.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 * index }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Map Section */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-900" />
              Location Map
            </h3>
            
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
                <iframe 
                  src={destination.mapUrl}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title={`Map of ${destination.name}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {destination.name}, Indonesia
              </p>
            </motion.div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Travel Information
            </h3>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={fadeUp} transition={{ delay: 0.35 }}>
                  <h4 className="font-bold text-gray-700 mb-2">
                    Best Time to Visit
                  </h4>
                  <p className="text-gray-600">May to September (Dry Season)</p>
                </motion.div>
                <motion.div variants={fadeUp} transition={{ delay: 0.4 }}>
                  <h4 className="font-bold text-gray-700 mb-2">
                    Getting There
                  </h4>
                  <p className="text-gray-600">
                    By air, land, or sea depending on location
                  </p>
                </motion.div>
                <motion.div variants={fadeUp} transition={{ delay: 0.45 }}>
                  <h4 className="font-bold text-gray-700 mb-2">
                    Local Language
                  </h4>
                  <p className="text-gray-600">
                    Indonesian (Bahasa Indonesia)
                  </p>
                </motion.div>
                <motion.div variants={fadeUp} transition={{ delay: 0.5 }}>
                  <h4 className="font-bold text-gray-700 mb-2">Currency</h4>
                  <p className="text-gray-600">Indonesian Rupiah (IDR)</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Navigation Buttons - Previous & Next */}
          <motion.div
            className="mt-16 flex justify-between items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center">
              <button
                onClick={() => handleNavigation(prevItem?.link)}
                className={`mr-3 flex items-center justify-center p-3 rounded-full transition ${
                  prevItem 
                    ? "bg-blue-900 text-white hover:bg-blue-800" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!prevItem}
                aria-label="Previous destination"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {prevItem && (
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">{prevItem.name}</span>
                  <span className="text-sm text-gray-600">Destination</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              {nextItem && (
                <div className="flex flex-col items-end">
                  <span className="font-medium text-gray-800">{nextItem.name}</span>
                  <span className="text-sm text-gray-600">Destination</span>
                </div>
              )}
              
              <button
                onClick={() => handleNavigation(nextItem?.link)}
                className={`ml-3 flex items-center justify-center p-3 rounded-full transition ${
                  nextItem 
                    ? "bg-blue-900 text-white hover:bg-blue-800" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!nextItem}
                aria-label="Next destination"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}