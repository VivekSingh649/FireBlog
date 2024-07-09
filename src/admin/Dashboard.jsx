import React from "react";
import { Link } from "react-router-dom";
import SinglePostSkeleton from "../skeleton/SinglePostSkeleton";

function Dashboard() {
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
                placeholder="Search here..."
                className="bg-gray-200"
              />
            </div>
            <div className="filer_types">
              <select
                name="categories"
                className="p-4 outline-none bg-gray-200 rounded-full"
              >
                <option value="" disabled>
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

        <div className="post_lists flex flex-col gap-y-7 mx-10 mt-10">
          <SinglePostSkeleton />
          <div className="single_post p-4 shadow bg-white">
            <div className="flex items-center">
              <div className="w-1/4">
                <Link to="#" target="_blank">
                  <img
                    src="https://s3.us-west-2.amazonaws.com/article.slideserve.com/14591/thumb.jpg"
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <div className="w-3/4 p-4">
                <Link to="#" target="_blank">
                  <h5 className="text-xl font-bold text-gray-800 truncate">
                    Green Earth Plant Hire: Elevate Your Space With Plant Rental
                    Services
                  </h5>
                </Link>
                <p className="text-gray-600 mt-2">Created Date: Jul 08, 2024</p>
                <p className="text-gray-600">
                  Category:{" "}
                  <span className="text-yellow-500 font-bold">Games</span>
                </p>
              </div>
              <div className="flex gap-y-4 flex-col items-center justify-center p-4">
                <button
                  className="bg-gray-200 p-2 px-3 icon_hover"
                  onClick={() =>
                    confirm("Are you sure you want to delete this item")
                  }
                >
                  <i className="bi bi-trash text-lg text-heading-600"></i>
                </button>
                <Link to="#" className="bg-gray-200 p-2 px-3 icon_hover">
                  <i className="bi bi-pencil-square"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="single_post p-4 shadow bg-white">
            <div className="flex items-center">
              <div className="w-1/4">
                <Link to="#" target="_blank">
                  <img
                    src="https://s3.us-west-2.amazonaws.com/article.slideserve.com/14591/thumb.jpg"
                    className="object-cover w-full h-40"
                  />
                </Link>
              </div>
              <div className="w-3/4 p-4">
                <Link to="#" target="_blank">
                  <h5 className="text-xl font-bold text-gray-800 truncate">
                    Green Earth Plant Hire: Elevate Your Space With Plant Rental
                    Services
                  </h5>
                </Link>
                <p className="text-gray-600 mt-2">Created Date: Jul 08, 2024</p>
                <p className="text-gray-600">
                  Category:{" "}
                  <span className="text-yellow-500 font-bold">Games</span>
                </p>
              </div>
              <div className="flex gap-y-4 flex-col items-center justify-center p-4">
                <button
                  className="bg-gray-200 p-2 px-3 icon_hover"
                  onClick={() =>
                    confirm("Are you sure you want to delete this item")
                  }
                >
                  <i className="bi bi-eye text-lg text-heading-600"></i>
                </button>
                <Link to="#" className="bg-gray-200 p-2 px-3 icon_hover">
                  <i className="bi bi-pencil-square"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="single_post p-4 shadow bg-white">
            <div className="flex items-center">
              <div className="w-1/4">
                <Link to="#" target="_blank">
                  <img
                    src="https://s3.us-west-2.amazonaws.com/article.slideserve.com/14591/thumb.jpg"
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <div className="w-3/4 p-4">
                <Link to="#" target="_blank">
                  <h5 className="text-xl font-bold text-gray-800 truncate">
                    Green Earth Plant Hire: Elevate Your Space With Plant Rental
                    Services
                  </h5>
                </Link>
                <p className="text-gray-600 mt-2">Created Date: Jul 08, 2024</p>
                <p className="text-gray-600">
                  Category:{" "}
                  <span className="text-yellow-500 font-bold">Games</span>
                </p>
              </div>
              <div className="flex gap-y-4 flex-col items-center justify-center p-4">
                <Link className="bg-gray-200 p-2 px-3 icon_hover" to="#">
                  <i className="bi bi-eye text-lg text-heading-600"></i>
                </Link>
                <Link to="#" className="bg-gray-200 p-2 px-3 icon_hover">
                  <i className="bi bi-pencil-square"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
