import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { eventsData } from "../../data/allEventsData";

export default function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const id = parseInt(eventId || "0");

  const event = eventsData.find((e) => e.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Event not found</h2>
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white">
            <button
              onClick={() => navigate("/events")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Events
            </button>
            <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
              {event.category}
            </p>
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <p className="text-lg">
              {event.date} | {event.location}
            </p>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Event Details
          </h2>

          {/* Event text paragraphs */}
          <div className="prose prose-lg max-w-none">
            {event.text.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Events */}
          {/* <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-blue-900">
              You Might Also Like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsData
                .filter(
                  (e) => e.id !== event.id && e.category === event.category
                )
                .slice(0, 3)
                .map((relatedEvent) => (
                  <div
                    key={relatedEvent.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                    onClick={() => navigate(`/events/${relatedEvent.id}`)}
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedEvent.image}
                        alt={relatedEvent.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-1">{relatedEvent.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {relatedEvent.date}
                      </p>
                      <span className="text-blue-900 text-sm font-medium hover:underline">
                        View Event
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
