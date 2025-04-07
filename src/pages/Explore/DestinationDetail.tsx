import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { locations } from "../../data/locationsData";

export default function DestinationDetail() {
  const { destinationPath } = useParams();
  const navigate = useNavigate();

  const destination = locations.find(
    (loc) => loc.link === `/destination/${destinationPath}`
  );

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

  // Sample detailed content for the destination
  const detailedContent = `
    ${destination.name} is one of Indonesia's most spectacular destinations. The area offers visitors a chance to experience the natural beauty and cultural richness that Indonesia is famous for.
    
    Visitors can enjoy a variety of activities here, from exploring natural landscapes to participating in local cultural events. The location is also known for its warm hospitality and delicious local cuisine.
    
    Throughout the year, various events and festivals take place here, making it an exciting destination regardless of when you visit. Local guides can help you navigate the area and provide deeper insights into its history and significance.
    
    For the best experience, consider visiting during the dry season when weather conditions are optimal for outdoor activities. Many accommodations range from luxury resorts to budget-friendly homestays, catering to all types of travelers.
  `;

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
          <div className="text-white max-w-3xl">
            <button
              onClick={() => navigate("/destinations")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Destinations
            </button>

            <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
              Featured Destination
            </p>

            <h1 className="text-4xl font-bold mb-3">{destination.name}</h1>

            <p className="text-lg">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Destination Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Destination Details
          </h2>

          {/* Destination text paragraphs */}
          <div className="prose prose-lg max-w-none">
            {detailedContent.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Travel Information
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">
                    Best Time to Visit
                  </h4>
                  <p className="text-gray-600">May to September (Dry Season)</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">
                    Getting There
                  </h4>
                  <p className="text-gray-600">
                    By air, land, or sea depending on location
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">
                    Local Language
                  </h4>
                  <p className="text-gray-600">Indonesian (Bahasa Indonesia)</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">Currency</h4>
                  <p className="text-gray-600">Indonesian Rupiah (IDR)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/destinations")}
              className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Explore More Destinations
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
