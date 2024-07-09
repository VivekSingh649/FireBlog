import React from "react";

function PostInfo({ imageName }) {
  return (
    <>
      <div className="postinfo">
        <div className="thumb">
          <img
            src="https://themexriver.com/wp/magezix/wp-content/uploads/2022/05/travel-new.jpg"
            alt={imageName}
            className="w-full h-full"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 md:gap-10 flex-wrap md:flex-nowrap">
            <p className="md:text-lg">
              <i className="bi bi-person-circle text-primary-700 mr-2"></i>
              Post by Admin
            </p>
            <p className="md:text-lg">
              <i className="bi bi-tag-fill text-primary-700 mr-2"></i>
              Technology
            </p>
            <p className="md:text-lg">
              <i className="bi bi-calendar2-range-fill text-primary-700 mr-2"></i>
              7th July 2024
            </p>
          </div>
          <h1 className="mt-4 text-2xl lg:text-4xl font-bold">
            July 2024 Car Launches: Must See 6 New Models
          </h1>
        </div>
      </div>
    </>
  );
}

export default PostInfo;
