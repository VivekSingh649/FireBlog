import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/authProvider";

function BlogCard({
  listBlog,
  singlePostLink = "",
  cateLink = "",
  postTitle,
  postImage,
  catgory,
  date,
}) {
  const { formatUrlString } = useAppContext();

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
          src={postImage}
          alt="img"
          loading="lazy"
        />
      </Link>
      <div className="details">
        <p className="cat bg-primary-600">{catgory}</p>
        <p className="date mb-2">
          <i className="bi bi-calendar2-range mr-2"></i>
          {new Date(date).toLocaleString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h5 className="mb-3">
          <Link
            to={`/blog/${formatUrlString(cateLink)}/${formatUrlString(
              singlePostLink
            )}`}
            className="text-2xl blog_head"
          >
            {postTitle}
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
