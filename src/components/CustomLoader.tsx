import { useState, useEffect } from "react";

const CustomLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo atau nama aplikasi */}
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Travel Indonesia
      </h1>

      <div className="mb-4">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-64 h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-700 font-medium">Loading... {progress}%</p>
    </div>
  );
};

export default CustomLoader;
