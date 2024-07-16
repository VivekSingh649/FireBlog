import React from "react";
import { Link } from "react-router-dom";

function PostBread({ postName, postLink, cateName, cateLink }) {
  return (
    <>
      <div className="page_title_wrapper bg-primary-50">
        <div className="container">
          <div className="py-20">
            <h2 className="text-3xl md:text-6xl text-heading-600 text-center">
              {postName}
            </h2>
            <div className="flex mt-4 justify-center">
              <Link to="/" className="text-heading-600 text-center">
                Home
              </Link>
              <i className="bi text-heading-600 text-center bi-chevron-right"></i>
              <Link to={cateLink} className="text-heading-600 text-center">
                {cateName}
              </Link>
              <i className="bi text-heading-600 text-center bi-chevron-right"></i>
              <Link to={postLink} className="text-heading-600 text-center">
                {postName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostBread;
