// IndonesiaParadise.tsx
import React from "react";

const IndonesiaParadise: React.FC = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
      {/* Indonesia Map Background */}
      <div className="absolute inset-0 bg-indigo-50">
        <img
          src="/images/indonesia.svg"
          alt="Indonesia Map"
          className="h-full w-full object-cover opacity-20"
          style={{ filter: "sepia(30%) hue-rotate(180deg)", minWidth: "100vw" }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
            Discover{" "}
            <span className="text-blue-600">Earth's Last Paradise</span>
          </h1>
          <p className="text-lg font-medium text-gray-600 md:text-xl">
            Indonesia - Where emerald jungles meet crystal waters, and every
            island whispers tales of ancient wonders
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndonesiaParadise;