import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { eventsData } from "../../data/allEventsData";

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
          <div className="text-white max-w-3xl">
            <button
              onClick={() => navigate("/events")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Events
            </button>
            
            <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
              {event.category}
            </p>
            
            <h1 className="text-4xl font-bold mb-3">
              {event.title}
            </h1>
            
            <p className="text-lg">
              {event.date} | {event.location}
            </p>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Event Details
          </h2>

          {/* Event text paragraphs */}
          <div className="prose prose-lg max-w-none">
            {event.text.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}