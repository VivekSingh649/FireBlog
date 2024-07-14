import React from "react";
import { Link } from "react-router-dom";
import SinglePostSkeleton from "../skeleton/SinglePostSkeleton";
import useAllPosts from "../utilities/useAllPosts";
import { useAppContext } from "../context/authProvider";
import { toast } from "react-toastify";

function Dashboard() {
  const { formatUrlString, deletePost, currentUser } = useAppContext();
  const {
    filteredPosts,
    isFetching,
    allCategory,
    searchValue,
    setSearchValue,
    selectedCategory,
    setSelectedCategory,
    fetchData,
  } = useAllPosts(currentUser.uid);
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
    <>
      <div className="container min-h-screen w-full bg-slate-50 p-0">
        <div className="shadow px-8 py-4 bg-white items-center flex justify-between flex-wrap lg:flex-nowrap gap-y-4 sticky top-0 left-0 z-50">
          <h1 className="text-4xl text-heading-600 font-bold leading-none">
            All Posts
          </h1>
          <div className="flex justify-between lg:gap-x-8">
            <div className="search_box">
              <div className="search_icon">
                <i className="bi bi-search"></i>
              </div>
              <input
                type="text"
                name="search"
                onChange={handleSearch}
                value={searchValue}
                placeholder="Search here..."
                className="bg-gray-200"
              />
            </div>
            <div className="filer_types">
              <select
                name="categories"
                className="p-4 outline-none bg-gray-200 rounded-full"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="" disabled>
                  Filter By Categoires
                </option>
                {allCategory.map((cate) => (
                  <option value={cate.data} key={cate.id}>
                    {cate.data}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="post_lists flex flex-col gap-y-7 mx-10 py-10">
          {isFetching
            ? [...Array(3)].map((_, index) => (
                <SinglePostSkeleton key={index} />
              ))
            : filteredPosts.map((post) => (
                <div className="single_post p-4 shadow bg-white" key={post.id}>
                  <div className="flex items-center">
                    <div className="w-1/4">
                      <Link
                        to={`/blog/${formatUrlString(
                          post.category
                        )}/${formatUrlString(post.postTitle)}`}
                        target="_blank"
                      >
                        <img
                          src={post.postImage}
                          className="object-cover w-full h-full"
                        />
                      </Link>
                    </div>
                    <div className="w-3/4 p-4">
                      <Link
                        to={`/blog/${formatUrlString(
                          post.category
                        )}/${formatUrlString(post.postTitle)}`}
                        target="_blank"
                      >
                        <h5 className="text-xl font-bold text-gray-800 truncate">
                          {post.postTitle}
                        </h5>
                      </Link>
                      <p className="text-gray-600 mt-2">
                        Created Date:
                        {new Date(post.createDate).toLocaleString("en-us", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-gray-600">
                        Category:
                        <span className="text-primary-500 font-bold">
                          {post.category}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-y-4 flex-col items-center justify-center p-4">
                      <button
                        className="bg-gray-200 p-2 px-3 icon_hover"
                        onClick={() => deletePost(post.id, fetchData)}
                      >
                        <i className="bi bi-trash text-lg text-heading-600"></i>
                      </button>
                      <Link
                        to={`/admin/update-post/${post.id}`}
                        className="bg-gray-200 p-2 px-3 icon_hover"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
