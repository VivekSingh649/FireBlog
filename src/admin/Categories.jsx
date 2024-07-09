import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="container min-h-screen w-full bg-slate-50 p-0">
        <div className="px-8 py-4 bg-white shadow sticky top-0 left-0">
          <h1 className="text-4xl text-heading-600 font-bold">
            Add a Category
          </h1>
        </div>

        <form action="" className="mx-8 mt-10">
          <div className="input_wrapper shadow-sm mb-8">
            <p className="text-lg capitalize font-medium mb-1 text-heading-600">
              Add Category
            </p>
            <input
              type="text"
              name="title"
              placeholder="Enter your category name"
            />
          </div>
        </form>

        <div className="flex gap-8 mx-8">
          <Link
            to="#"
            target="_blank"
            className="flex-1 max-w-fit py-2 px-5 shadow-sm rounded-sm bg-white"
          >
            <h2 className="text-heading-600 text-center text-lg font-semibold">
              Games
            </h2>
          </Link>
          <Link
            to="#"
            target="_blank"
            className="flex-1 max-w-fit py-2 px-5 shadow-sm rounded-sm bg-white"
          >
            <h2 className="text-heading-600 text-center text-lg font-semibold">
              Games
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
