import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { infoCards } from "../../data/info";

export default function EssentialsDetail() {
  const { infoId } = useParams();
  const navigate = useNavigate();
  
  const info = infoCards.find((card) => {
    const cardPath = card.link.split('/').pop();
    return cardPath === infoId;
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle case when info is not found
  if (!info) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Information not found</h2>
        <button
          onClick={() => navigate("/information")}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Back to Information
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
          <div className="max-w-3xl text-white">
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-white mb-6 hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </button>
            <h1 className="text-4xl font-bold mb-2">{info.title}</h1>
            <p className="text-lg">{info.description}</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Essential Information
          </h2>
          
          {/* Content paragraphs - Using markdown conversion */}
          <div className="prose prose-lg max-w-none">
            {info.text.split("\n\n").map((paragraph, index) => {
              // Handle markdown headings
              if (paragraph.startsWith("# ")) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
              } else if (paragraph.startsWith("## ")) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>;
              } else if (paragraph.startsWith("### ")) {
                return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>;
              } else if (paragraph.startsWith("- ")) {
                // Handle bullet points
                const items = paragraph.split("\n- ");
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {items.map((item, i) => (
                      <li key={i} className="mb-1">
                        {i === 0 ? item.slice(2) : item}
                      </li>
                    ))}
                  </ul>
                );
              } else {
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}