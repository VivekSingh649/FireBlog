import React from "react";

function PostInfo({ imageUrl, postName, category, date }) {
  return (
    <>
      <div className="postinfo">
        <div className="thumb">
          <img src={imageUrl} alt={postName} className="w-full h-full" />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 md:gap-10 flex-wrap md:flex-nowrap">
            <p className="md:text-lg">
              <i className="bi bi-person-circle text-primary-700 mr-2"></i>
              Post by Admin
            </p>
            <p className="md:text-lg">
              <i className="bi bi-tag-fill text-primary-700 mr-2"></i>
              {category}
            </p>
            <p className="md:text-lg">
              <i className="bi bi-calendar2-range-fill text-primary-700 mr-2"></i>
              {new Date(date).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <h1 className="mt-4 text-2xl lg:text-4xl font-bold">{postName}</h1>
        </div>
      </div>
    </>
  );
}

export default PostInfo;
