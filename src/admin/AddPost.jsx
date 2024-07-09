import React, { useRef } from "react";
import TextEditor from "../components/TextEditor";

function AddPost() {
  const editorRef = useRef(null);
  console.log(editorRef);

  return (
    <>
      <div className="container min-h-screen w-full bg-slate-50 p-0">
        <div className="px-8 py-4 bg-white shadow sticky top-0 left-0">
          <h1 className="text-4xl text-heading-600 font-bold">Add a post</h1>
        </div>

        <form action="" className="mt-8 grid w-full grid-cols-12">
          <div className="col-span-8 px-6">
            <div className="input_wrapper shadow-sm mb-8">
              <p className="text-lg capitalize font-medium mb-1 text-heading-600">
                Post title
              </p>
              <input
                type="text"
                name="title"
                placeholder="Enter your post title"
              />
            </div>
            <div className="input_wrapper shadow-sm mb-8">
              <p className="text-lg capitalize font-medium mb-1 text-heading-600">
                Categories
              </p>
              <select name="categories">
                <option value="" disabled>
                  Select Your Category
                </option>
                <option value="Cars">Cars</option>
                <option value="Game">Games</option>
                <option value="Techonligy">Technology</option>
              </select>
            </div>
            <TextEditor editorRef={editorRef} />
          </div>
          <div className="col-span-4 p-8">
            <div className="w-full mb-6">
              <img
                src="https://themexriver.com/wp/magezix/wp-content/uploads/2022/05/travel-new.jpg"
                alt=""
              />
            </div>

            <div className="input_wrapper shadow-sm mb-6">
              <p className="text-lg capitalize font-medium mb-1 text-heading-600">
                Upload File
              </p>
              <input
                type="file"
                className="w-full text-gray-400 text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
              />
            </div>

            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-primary-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "45%" }}
              >
                45%
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent text-md uppercase rounded-md text-white bg-primary-800 hover:bg-primary-900"
            >
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
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPost;