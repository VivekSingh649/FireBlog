import React from "react";
import { Link } from "react-router-dom";

export const formatUrlString = (str) => {
  return str ? str.toLowerCase().replace(/\s+/g, "-") : "";
};

function BlogCard({ listBlog, singlePostLink = "", cateLink = "" }) {
  return (
    <div className={`${listBlog ? "list" : ""} single-blog-grid`}>
      <Link
        className="thumb"
        to={`/blog/${formatUrlString(cateLink)}/${formatUrlString(
          singlePostLink
        )}`}
      >
        <img
          className="border-radius-5"
          src="https://themexriver.com/wp/magezix/wp-content/uploads/2022/05/travel-new.jpg"
          alt="img"
        />
      </Link>
      <div className="details">
        <p className="cat bg-primary-600">NEWS</p>
        <p className="date mb-2">
          <i className="bi bi-calendar2-range mr-2"></i> 11 January, 2023
        </p>
        <h5 className="mb-3">
          <Link
            to={`/blog/${formatUrlString(cateLink)}/${formatUrlString(
              singlePostLink
            )}`}
            className="text-2xl blog_head"
          >
            Transforming businesses, one pixel at a time
          </Link>
        </h5>
        <Link
          to={`/blog/${formatUrlString(cateLink)}/${formatUrlString(
            singlePostLink
          )}`}
          className="flex items-center gap-2 read_more"
        >
          Read More
          <i className="bi bi-arrow-right leading-none mt-1"></i>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
