import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "../skeleton/BlogCardSkeleton";
import { toast } from "react-toastify";
import useAllPosts from "../utilities/useAllPosts";

function Posts() {
  const [isActive, setIsActive] = useState(false);
  const {
    filteredPosts,
    isFetching,
    allCategory,
    searchValue,
    setSearchValue,
    selectedCategory,
    setSelectedCategory,
  } = useAllPosts();

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      toast.error("Search value cannot be empty or spaces.");
      setSearchValue("");
    } else {
      setSearchValue(value);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="main_wrapper">
      <div className="flex justify-between flex-wrap lg:flex-nowrap gap-y-4">
        <div className="search_box">
          <div className="search_icon">
            <i className="bi bi-search"></i>
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search here..."
            onChange={handleSearch}
            value={searchValue}
          />
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
            <select
              name="categories"
              className="p-4 outline-none"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">Filter By Categoires</option>
              {allCategory.map((cate) => (
                <option value={cate.data} key={cate.id}>
                  {cate.data}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Header End  */}
      <div className="blogs_wrapper py-10">
        <div
          className={`grid ${
            isActive
              ? "gap-8 gap-y-0 grid-cols-1 xl:grid-cols-2"
              : "gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {isFetching
            ? [...Array(8)].map((_, index) => (
                <BlogCardSkeleton listBlog={isActive} key={index} />
              ))
            : filteredPosts.map((blog) => (
                <BlogCard
                  listBlog={isActive}
                  key={blog.id}
                  singlePostLink={blog.postTitle}
                  cateLink={blog.category}
                  postTitle={blog.postTitle}
                  postImage={blog.postImage}
                  date={blog.createDate}
                  catgory={blog.category}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
