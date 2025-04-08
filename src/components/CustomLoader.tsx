import { useState, useEffect } from "react";

interface CustomLoaderProps {
  initialLoad?: boolean;
}

const CustomLoader = ({ initialLoad = false }: CustomLoaderProps) => {
  const [progress, setProgress] = useState(initialLoad ? 0 : 30);
  const maxProgress = initialLoad ? 100 : 100;
  const incrementStep = initialLoad ? 3 : 10;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= maxProgress) {
          clearInterval(timer);
          return maxProgress;
        }
        return prevProgress + incrementStep;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [maxProgress, incrementStep]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        <span className="text-gray-900">Explore</span>Nusantara
      </h1>

      <div className="w-64 h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
        <div
          className="h-full bg-blue-900 rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-700 font-medium">
        {initialLoad ? "Loading..." : "Loading..."} {progress}%
      </p>
    </div>
  );
};

export default CustomLoader;
