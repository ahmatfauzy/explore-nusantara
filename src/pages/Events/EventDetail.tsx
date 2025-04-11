import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { eventsData } from "../../data/allEventsData";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function EventDetail() {
  const { eventPath } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find((e) => e.path === `/events/${eventPath}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Event not found</h2>
        <button
          onClick={() => navigate("/events")}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Back to Events
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${event.image})`,
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
              onClick={() => navigate("/events")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Events
            </button>

            <motion.p
              className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              {event.category}
            </motion.p>

            <motion.h1
              className="text-4xl font-bold mb-3"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              {event.title}
            </motion.h1>

            <motion.p
              className="text-lg"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              {event.date} | {event.location}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Event Content */}
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
            Event Details
          </motion.h2>

          {/* Event text paragraphs */}
          <div className="prose prose-lg max-w-none">
            {event.text.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{  amount: 0.2 }}
                transition={{ delay: 0.1 * index }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
