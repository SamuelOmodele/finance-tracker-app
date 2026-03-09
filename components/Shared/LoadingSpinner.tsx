import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-blue-900 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div
            className="absolute top-2 left-2 w-12 h-12 border-4 border-t-transparent border-r-blue-700 border-b-transparent border-l-transparent rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
          <div className="absolute top-4 left-4 w-8 h-8 border-4 border-t-transparent border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
