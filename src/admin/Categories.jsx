import React, { useState } from "react";
import { useAppContext } from "../context/authProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAllPosts from "../utilities/useAllPosts";
import { Helmet } from "react-helmet";

function Categories() {
  const [category, setCategory] = useState("");
  const { addCategory, loading, formatUrlString } = useAppContext();
  const { allCategory, isFetching, fetchData } = useAllPosts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category.trim()) {
      toast.error("Empthy Catory will not add!");
      return;
    }
    if (allCategory.find((data) => data.data == category.trim())) {
      toast.error(`${category} is already added`);
      return;
    }
    await addCategory(category.trim());
    setCategory("");
    fetchData();
  };
  return (
    <>
      <Helmet>
        <title>{`FireBlog | Add Category`}</title>
      </Helmet>
      <div className="container min-h-screen w-full bg-slate-50 p-0">
        <div className="px-8 py-4 bg-white shadow sticky top-0 left-0">
          <h1 className="text-4xl text-heading-600 font-bold">
            Add a Category
          </h1>
        </div>

        <div className="flex mx-8 mt-10 gap-8">
          {/* Add Category Form */}
          <div className="flex-1">
            <form action="" onSubmit={handleSubmit}>
              <div className="relative input_wrapper shadow-sm mb-8">
                <p className="text-lg capitalize font-medium mb-1 text-heading-600">
                  Add Category
                </p>
                <input
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  name="category"
                  placeholder="Enter your category name"
                  className="w-full px-4 py-2 border rounded"
                />
                <button
                  type="submit"
                  className="flex max-w-max absolute bottom-2 right-0 items-center justify-center py-2 px-4 border border-transparent text-md uppercase rounded-md text-white bg-primary-800 hover:bg-primary-900"
                >
                  {loading.addSingleCategory ? (
                    <div role="status" className="mr-2">
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-primary-800"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    ""
                  )}
                  Add Category
                </button>
              </div>
            </form>
          </div>

          {/* Category List */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <div className="flex items-center gap-4 flex-wrap">
              {isFetching ? (
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(8)].map((_, index) => (
                    <div key={index} className="animate-pulse">
                      <div className="w-32 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center">
                        <div className="w-4/5 h-6 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                allCategory.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/blog/${formatUrlString(cat.data)}`}
                    target="_blank"
                    className="w-max block py-2 px-5 shadow-sm rounded-sm bg-white"
                  >
                    <h2 className="text-heading-600 text-center text-lg font-semibold">
                      {cat.data}
                    </h2>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
