import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { infoCards } from "../../data/info";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Format markdown
const formatMarkdownText = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br />");
};

export default function EssentialsDetail() {
  const { infoId } = useParams();
  const navigate = useNavigate();

  const info = infoCards.find((card) => {
    const cardPath = card.link.split("/").pop();
    return cardPath === infoId;
  });

  const recommendedEssentials = infoCards
    .filter((card) => {
      const cardPath = card.link.split("/").pop();
      return cardPath !== infoId;
    })
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!info) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Information not found</h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="h-96 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${info.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            className="max-w-3xl text-white"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </button>

            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              {info.title}
            </motion.h1>

            <motion.p
              className="text-lg"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              {info.description}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-6 text-blue-900"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Essential Information
          </motion.h2>

          <div className="prose prose-lg max-w-none">
            {info.text.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <motion.h1
                    key={index}
                    className="text-3xl font-bold mt-8 mb-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {paragraph.slice(2)}
                  </motion.h1>
                );
              } else if (paragraph.startsWith("## ")) {
                return (
                  <motion.h2
                    key={index}
                    className="text-2xl font-bold mt-6 mb-3"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {paragraph.slice(3)}
                  </motion.h2>
                );
              } else if (paragraph.startsWith("### ")) {
                return (
                  <motion.h3
                    key={index}
                    className="text-xl font-bold mt-4 mb-2"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {paragraph.slice(4)}
                  </motion.h3>
                );
              } else if (paragraph.trim().startsWith("- ")) {
                const items = paragraph
                  .trim()
                  .split("\n")
                  .filter((line) => line.startsWith("- "));

                return (
                  <motion.ul
                    key={index}
                    className="list-disc pl-6 mb-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="mb-1"
                        dangerouslySetInnerHTML={{
                          __html: formatMarkdownText(item.slice(2)),
                        }}
                      />
                    ))}
                  </motion.ul>
                );
              } else {
                return (
                  <motion.p
                    key={index}
                    className="mb-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: 0.1 * index }}
                    dangerouslySetInnerHTML={{
                      __html: formatMarkdownText(paragraph),
                    }}
                  />
                );
              }
            })}
          </div>

          {/* Recommended Section */}
          {recommendedEssentials.length > 0 && (
            <motion.div
              className="mt-16 border-t pt-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-blue-900">
                Essentials Lainnya yang Mungkin Anda Ingin Baca juga
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedEssentials.map((item, i) => (
                  <motion.div
                    key={item.link}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: 0.2 * i }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => navigate(item.link)}
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-blue-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                      <button
                        className="mt-4 text-blue-900 font-medium hover:underline flex items-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(item.link);
                        }}
                      >
                        Baca selengkapnya
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
