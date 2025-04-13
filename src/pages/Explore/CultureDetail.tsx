import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cultureData } from "../../data/cultureData";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CultureDetail() {
  const { culturePath } = useParams();
  const navigate = useNavigate();

  const currentIndex = cultureData.findIndex(
    (item) => item.link === `/culture/${culturePath}`
  );

  const cultureItem = currentIndex !== -1 ? cultureData[currentIndex] : null;

  const prevItem = currentIndex > 0 ? cultureData[currentIndex - 1] : null;
  const nextItem =
    currentIndex < cultureData.length - 1
      ? cultureData[currentIndex + 1]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [culturePath]); // Add culturePath as dependency to scroll to top when it changes

  if (!cultureItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Cultural item not found</h2>
        <button
          onClick={() => navigate("/culture")}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Back to Culture
        </button>
      </div>
    );
  }

  const detailedContent = `
    ${cultureItem.name} represents one of Indonesia's most significant cultural treasures, originating from the ${cultureItem.region} region. This ${cultureItem.category} has been passed down through generations and continues to play an important role in Indonesian cultural identity.

    The history of ${cultureItem.name} dates back centuries and is deeply intertwined with the religious and social practices of the region. Throughout its evolution, it has maintained its core characteristics while adapting to changing times.

    What makes ${cultureItem.name} particularly special is its unique combination of artistic elements, technical skill, and cultural significance. It requires years of practice and dedication to master, and practitioners are highly respected within their communities.

    Today, efforts are being made to preserve this important cultural heritage and introduce it to younger generations. Various cultural centers and educational programs focus on teaching the traditional techniques and significance of ${cultureItem.name}.
  `;

  const historicalPoints = [
    "Origins dating back several centuries",
    "Evolution through different historical periods",
    "Influence of various religions and beliefs",
    "Modern preservation efforts",
  ];

  const handleNavigation = (path?: string) => {
    if (path) {
      const newPath = path.replace("/culture/", "");
      navigate(`/culture/${newPath}`);
      // Scroll to top is now handled by the useEffect with culturePath dependency
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="h-96 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${cultureItem.image})`,
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
              onClick={() => navigate("/culture")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Culture
            </button>

            <motion.p
              className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              {cultureItem.category.charAt(0).toUpperCase() +
                cultureItem.category.slice(1).replace("-", " ")}{" "}
              • {cultureItem.region}
            </motion.p>

            <motion.h1
              className="text-4xl font-bold mb-3"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              {cultureItem.name}
            </motion.h1>

            <motion.p
              className="text-lg"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              {cultureItem.description}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Culture Content */}
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
            About {cultureItem.name}
          </motion.h2>

          {/* Culture text paragraphs */}
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

          {/* Historical Section */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Historical Significance
            </h3>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {historicalPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    variants={fadeUp}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-blue-900 mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Where to Experience */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Where to Experience
            </h3>
            <p className="text-gray-700 mb-4">
              You can experience {cultureItem.name} at various locations
              throughout Indonesia:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <motion.li variants={fadeUp} transition={{ delay: 0.3 }}>
                Cultural centers in {cultureItem.region}
              </motion.li>
              <motion.li variants={fadeUp} transition={{ delay: 0.35 }}>
                Traditional performances in major cities
              </motion.li>
              <motion.li variants={fadeUp} transition={{ delay: 0.4 }}>
                Museums and art galleries
              </motion.li>
              <motion.li variants={fadeUp} transition={{ delay: 0.45 }}>
                Cultural festivals and special events
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
                  <span className="font-medium text-gray-800">
                    {prevItem.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {prevItem.region}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center">
              {nextItem && (
                <div className="flex flex-col items-end">
                  <span className="font-medium text-gray-800">
                    {nextItem.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {nextItem.region}
                  </span>
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
