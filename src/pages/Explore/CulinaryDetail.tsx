import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { culinaryData } from "../../data/culinaryData";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CulinaryDetail() {
  const { culinaryPath } = useParams();
  const navigate = useNavigate();

  const currentIndex = culinaryData.findIndex(
    (item) => item.link === `/culinary/${culinaryPath}`
  );
  
  const culinaryItem = currentIndex !== -1 ? culinaryData[currentIndex] : null;
  
  const prevItem = currentIndex > 0 ? culinaryData[currentIndex - 1] : null;
  const nextItem = currentIndex < culinaryData.length - 1 ? culinaryData[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!culinaryItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Item not found</h2>
        <button
          onClick={() => navigate("/culinary")}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Back to Culinary
        </button>
      </div>
    );
  }

  const detailedContent = `
    ${culinaryItem.name} is one of Indonesia's most beloved ${
    culinaryItem.category === "food" ? "dishes" : "beverages"
  }. It represents the rich culinary heritage of ${
    culinaryItem.region
  } and has become popular throughout Indonesia.

    The ${
      culinaryItem.category === "food" ? "dish" : "drink"
    } is known for its complex flavors that balance sweet, spicy, sour, and savory elements. Traditional preparation methods have been passed down through generations, ensuring authentic taste.

    Each region may have slight variations in how they prepare ${
      culinaryItem.name
    }, with local ingredients adding unique touches to the classic recipe. The ${
    culinaryItem.category === "food" ? "dish" : "drink"
  } is often served during special occasions and celebrations.

    Visitors to Indonesia should not miss the opportunity to taste authentic ${
      culinaryItem.name
    } from local vendors or restaurants that specialize in traditional Indonesian cuisine.
  `;

  const ingredients = [
    "Fresh local ingredients",
    "Traditional Indonesian spices",
    "Regional specialties",
    "Authentic preparation methods",
  ];

  const handleNavigation = (path?: string) => {
    if (path) {
      const newPath = path.replace('/culinary/', '');
      navigate(`/culinary/${newPath}`);
    }
  };
  

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="h-96 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${culinaryItem.image})`,
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
              onClick={() => navigate("/culinary")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Culinary
            </button>

            <motion.p
              className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              {culinaryItem.category === "food"
                ? "Traditional Food"
                : "Traditional Drink"}{" "}
              • {culinaryItem.region}
            </motion.p>

            <motion.h1
              className="text-4xl font-bold mb-3"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              {culinaryItem.name}
            </motion.h1>

            <motion.p
              className="text-lg"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              {culinaryItem.description}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Culinary Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-gray-800"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            About {culinaryItem.name}
          </motion.h2>

          <div className="prose prose-lg max-w-none">
            {detailedContent.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                transition={{ delay: 0.1 * index }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Ingredients Section */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Key Components
            </h3>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    variants={fadeUp}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-blue-900 mr-2">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Where to Find */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Where to Find
            </h3>
            <p className="text-gray-700 mb-4">
              You can find authentic {culinaryItem.name} at various locations
              throughout Indonesia:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <motion.li variants={fadeUp} transition={{ delay: 0.3 }}>
                Traditional markets in {culinaryItem.region}
              </motion.li>
              <motion.li variants={fadeUp} transition={{ delay: 0.35 }}>
                Local restaurants specializing in Indonesian cuisine
              </motion.li>
              <motion.li variants={fadeUp} transition={{ delay: 0.4 }}>
                Street food vendors in major cities
              </motion.li>
              <motion.li variants={fadeUp} transition={{ delay: 0.45 }}>
                Cultural festivals and culinary events
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Navigation Buttons - Previous & Next */}
          <motion.div
            className="mt-16 flex justify-between items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
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
                aria-label="Previous item"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {prevItem && (
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">{prevItem.name}</span>
                  <span className="text-sm text-gray-600">{prevItem.region}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              {nextItem && (
                <div className="flex flex-col items-end">
                  <span className="font-medium text-gray-800">{nextItem.name}</span>
                  <span className="text-sm text-gray-600">{nextItem.region}</span>
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
                aria-label="Next item"
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