import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { culinaryData } from "../../data/culinaryData";

export default function CulinaryDetail() {
  const { culinaryPath } = useParams();
  const navigate = useNavigate();
  
  const culinaryItem = culinaryData.find((item) => item.link === `/culinary/${culinaryPath}`);
  
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
  
  // Sample detailed content for the culinary item
  const detailedContent = `
    ${culinaryItem.name} is one of Indonesia's most beloved ${culinaryItem.category === "food" ? "dishes" : "beverages"}. It represents the rich culinary heritage of ${culinaryItem.region} and has become popular throughout Indonesia.
    
    The ${culinaryItem.category === "food" ? "dish" : "drink"} is known for its complex flavors that balance sweet, spicy, sour, and savory elements. Traditional preparation methods have been passed down through generations, ensuring authentic taste.
    
    Each region may have slight variations in how they prepare ${culinaryItem.name}, with local ingredients adding unique touches to the classic recipe. The ${culinaryItem.category === "food" ? "dish" : "drink"} is often served during special occasions and celebrations.
    
    Visitors to Indonesia should not miss the opportunity to taste authentic ${culinaryItem.name} from local vendors or restaurants that specialize in traditional Indonesian cuisine.
  `;
  
  // Sample ingredients section
  const ingredients = [
    "Fresh local ingredients",
    "Traditional Indonesian spices",
    "Regional specialties",
    "Authentic preparation methods"
  ];
  
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
          <div className="text-white max-w-3xl">
            <button
              onClick={() => navigate("/culinary")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to Culinary
            </button>
            
            <p className="bg-black bg-opacity-50 inline-block px-3 py-1 text-sm mb-2">
              {culinaryItem.category === "food" ? "Traditional Food" : "Traditional Drink"} • {culinaryItem.region}
            </p>
            
            <h1 className="text-4xl font-bold mb-3">
              {culinaryItem.name}
            </h1>
            
            <p className="text-lg">
              {culinaryItem.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Culinary Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            About {culinaryItem.name}
          </h2>
          
          {/* Culinary text paragraphs */}
          <div className="prose prose-lg max-w-none">
            {detailedContent.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Ingredients Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Key Components
            </h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-900 mr-2">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Where to Try */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Where to Find
            </h3>
            <p className="text-gray-700 mb-4">
              You can find authentic {culinaryItem.name} at various locations throughout Indonesia:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Traditional markets in {culinaryItem.region}</li>
              <li>Local restaurants specializing in Indonesian cuisine</li>
              <li>Street food vendors in major cities</li>
              <li>Cultural festivals and culinary events</li>
            </ul>
          </div>
          
          {/* 
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/culinary")}
              className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Explore More Culinary Delights
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}