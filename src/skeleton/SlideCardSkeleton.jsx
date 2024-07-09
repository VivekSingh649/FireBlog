import React from "react";

function SlideCardSkeleton() {
  return (
    <div className="slideCard_wrapper animate-pulse">
      <div className="image_handler bg-gray-300 h-64 w-full"></div>
      <div className="body_content p-6 md:p-16 md:pb-8">
        <div className="mb-6 slide_cate_wrapper  py-1 md:p-2 px-3 inline-block bg-gray-300 rounded-full h-6 w-24"></div>
        <div className="mb-6 h-8 md:h-12 bg-gray-300 rounded-full w-3/4"></div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gray-300 rounded-full mr-2"></div>
            <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
          </div>
          <span className="text-white mx-2">|</span>
          <div className="date flex items-center gap-2">
            <i className="bi bi-calendar4-week text-gray-300 rounded-full mr-2"></i>
            <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCardSkeleton;
