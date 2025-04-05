import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/eventsDataHome";

const EventsCards: React.FC = () => {
  const navigate = useNavigate();

  const handleEventClick = (id: number) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            UPCOMING EVENT
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">
            The Special Occasion of the Year!
          </h1>
        </div>
        <a
          href="/events"
          className="text-blue-600 font-medium hover:text-blue-800 mt-4 md:mt-0 flex items-center"
        >
          Explore More Events →
        </a>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event.id)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* Event Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                  {event.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {event.title}
              </h3>

              <div className="flex items-center text-gray-600 text-sm mb-1">
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{event.date}</span>
              </div>

              <div className="flex items-center text-gray-600 text-sm">
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="line-clamp-1">{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCards;