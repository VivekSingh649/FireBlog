import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "../skeleton/BlogCardSkeleton";
import { toast } from "react-toastify";

function Posts() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="main_wrapper">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-y-4">
          <div className="search_box">
            <div className="search_icon">
              <i className="bi bi-search"></i>
            </div>
            <input type="text" name="search" placeholder="Search here..." />
          </div>
          <div className="filer_types">
            <div className="flex gap-4 max-w-max">
              <div
                className={`icon ${isActive ? "" : "active"}`}
                onClick={() => setIsActive(!isActive)}
              >
                <i className="text-xl text-primary-600 bi bi-grid"></i>
              </div>
              <div
                className={`icon ${isActive ? "active" : ""}`}
                onClick={() => setIsActive(!isActive)}
              >
                <i className="text-xl text-primary-600 bi bi-list-task"></i>
              </div>
              <select name="categories" className="p-4 outline-none">
                <option value="game" disabled>
                  Filter By Categoires
                </option>
                <option value="game">Category</option>
                <option value="game">Category</option>
                <option value="game">Category</option>
                <option value="game">Category</option>
              </select>
            </div>
          </div>
        </div>
        {/* Header End  */}

        <div className="blogs_wrappper py-10">
          <div
            className={`grid ${
              isActive
                ? "gap-8 gap-y-0 grid-cols-1 xl:grid-cols-2"
                : "gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            <BlogCard listBlog={isActive} />
            <BlogCard listBlog={isActive} />
            <BlogCardSkeleton listBlog={isActive} />
            <BlogCardSkeleton listBlog={isActive} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
