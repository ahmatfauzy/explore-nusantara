import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface FeaturedSectionProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  className?: string;
}

export function FeaturedSection({ 
  title, 
  description, 
  linkText, 
  linkUrl,
  className = ""
}: FeaturedSectionProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-blue-900 font-medium mb-2">
            RECOMMENDATIONS
          </p>
          <h2 className="text-4xl font-bold text-blue-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            {description}
          </p>
        </div>
        <Link
          to={linkUrl}
          className="flex items-center text-blue-900 font-medium hover:underline"
        >
          {linkText}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}