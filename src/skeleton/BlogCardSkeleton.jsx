import React from "react";

function BlogCardSkeleton({ listBlog }) {
  return (
    <div className={`${listBlog ? "list" : ""} single-blog-grid animate-pulse`}>
      <div className={`thumb ${listBlog ? "w-full" : ""}`}>
        <div className="border-radius-5 bg-gray-300 h-[260px] w-full"></div>
      </div>
      <div className="details mt-4 w-full">
        <div className="cat bg-gray-300 rounded-full h-4 w-20 mb-2"></div>
        <div className="date bg-gray-300 rounded-full h-4 w-32 mb-2"></div>
        <div className="bg-gray-300 rounded-full h-6 w-3/4 mb-3"></div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-300 rounded-full h-4 w-20"></div>
          <div className="bg-gray-300 rounded-full h-4 w-4"></div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardSkeleton;
