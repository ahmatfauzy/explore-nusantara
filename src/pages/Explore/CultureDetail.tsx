import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { cultureData } from "../../data/cultureData";

export default function CultureDetail() {
  const { culturePath } = useParams();
  const navigate = useNavigate();

  const cultureItem = cultureData.find(
    (item) => item.link === `/culture/${culturePath}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Sample detailed content for the cultural item
  const detailedContent = `
    ${cultureItem.name} represents one of Indonesia's most significant cultural treasures, originating from the ${cultureItem.region} region. This ${cultureItem.category} has been passed down through generations and continues to play an important role in Indonesian cultural identity.
    
    The history of ${cultureItem.name} dates back centuries and is deeply intertwined with the religious and social practices of the region. Throughout its evolution, it has maintained its core characteristics while adapting to changing times.
    
    What makes ${cultureItem.name} particularly special is its unique combination of artistic elements, technical skill, and cultural significance. It requires years of practice and dedication to master, and practitioners are highly respected within their communities.
    
    Today, efforts are being made to preserve this important cultural heritage and introduce it to younger generations. Various cultural centers and educational programs focus on teaching the traditional techniques and significance of ${cultureItem.name}.
  `;

  // Sample historical points
  const historicalPoints = [
    "Origins dating back several centuries",
    "Evolution through different historical periods",
    "Influence of various religions and beliefs",
    "Modern preservation efforts",
  ];

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
          <div className="text-white max-w-3xl">
            <button
              onClick={() => navigate("/culture")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Culture
            </button>

            <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
              {cultureItem.category.charAt(0).toUpperCase() +
                cultureItem.category.slice(1).replace("-", " ")}{" "}
              • {cultureItem.region}
            </p>

            <h1 className="text-4xl font-bold mb-3">{cultureItem.name}</h1>

            <p className="text-lg">{cultureItem.description}</p>
          </div>
        </div>
      </div>

      {/* Culture Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            About {cultureItem.name}
          </h2>

          {/* Culture text paragraphs */}
          <div className="prose prose-lg max-w-none">
            {detailedContent.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Historical Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Historical Significance
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {historicalPoints.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-900 mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Where to Experience */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Where to Experience
            </h3>
            <p className="text-gray-700 mb-4">
              You can experience {cultureItem.name} at various locations
              throughout Indonesia:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cultural centers in {cultureItem.region}</li>
              <li>Traditional performances in major cities</li>
              <li>Museums and art galleries</li>
              <li>Cultural festivals and special events</li>
            </ul>
          </div>

{/*           
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/culture")}
              className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Explore More Cultural Attractions
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
