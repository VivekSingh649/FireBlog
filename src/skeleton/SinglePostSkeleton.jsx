import React from "react";
import { Link } from "react-router-dom";

const SinglePostSkeleton = () => {
  return (
    <div className="single_post p-4 shadow bg-white animate-pulse">
      <div className="flex items-center">
        <div className="w-1/4">
          <div className="w-full h-40 flex items-center justify-center bg-gray-100">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="w-3/4 p-4">
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex gap-y-4 flex-col items-center justify-center p-4">
          <div className="bg-gray-200 h-10 w-10 p-2 px-3 icon_hover"></div>
          <div className="bg-gray-200 h-10 w-10 p-2 px-3 icon_hover"></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostSkeleton;
