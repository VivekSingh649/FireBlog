import React, { useEffect, useRef, useState } from "react";
import TextEditor from "../components/TextEditor";
import useAllPosts from "../utilities/useAllPosts";
import { useAppContext } from "../context/authProvider";
import { useNavigate } from "react-router-dom";

function AddPost({ updateBlog, updatePost }) {
  const editorRef = useRef(null);
  const { handleUpload, loading, addPost, currentUser, requiredFields } =
    useAppContext();
  const { allCategory } = useAllPosts();
  const [formData, setFormData] = useState({
    postTitle: "",
    category: "",
    postImage: "",
    blogContent: "Write your blog content here...",
    createDate: "",
    authorId: currentUser.uid,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (updateBlog) {
      setFormData(updateBlog);
    }
  }, [updateBlog]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (content) => {
    setFormData({ ...formData, blogContent: content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isPostTitleValid = requiredFields("Post Title", formData.postTitle);
    const isCategoryValid = requiredFields("Category", formData.category);
    const isPostImageValid = requiredFields("Post Image", formData.postImage);

    if (!isPostTitleValid || !isCategoryValid || !isPostImageValid) {
      return;
    }

    if (updatePost) {
      await updatePost(formData);
    } else {
      await addPost(formData);
    }
    navigate("/admin/dashboard");
  };

  return (
    <>
      <div className="container min-h-screen w-full bg-slate-50 p-0">
        <div className="px-8 py-4 bg-white shadow sticky top-0 left-0">
          <h1 className="text-4xl text-heading-600 font-bold">
            {updateBlog ? "Update Post" : "Add a post"}
          </h1>
        </div>

        <form className="mt-8 grid w-full grid-cols-12" onSubmit={handleSubmit}>
          <div className="col-span-8 px-6">
            <div className="input_wrapper shadow-sm mb-8">
              <p className="text-lg capitalize font-medium mb-1 text-heading-600">
                Post title
              </p>
              <input
                type="text"
                name="postTitle"
                onChange={handleOnChange}
                value={formData.postTitle}
                placeholder="Enter your post title"
              />
            </div>
            <div className="input_wrapper shadow-sm mb-8">
              <p className="text-lg capitalize font-medium mb-1 text-heading-600">
                Categories
              </p>
              <select
                name="category"
                onChange={handleOnChange}
                value={formData.category}
              >
                <option value="" disabled>
                  Select Your Category
                </option>
                {allCategory.map((cate, idx) => (
                  <option value={cate.data} key={idx}>
                    {cate.data}
                  </option>
                ))}
              </select>
            </div>
            <TextEditor
              editorRef={editorRef}
              handleEditorChange={handleEditorChange}
              initialValue={formData.blogContent}
            />
          </div>
          <div className="col-span-4 p-8">
            <div className="w-full mb-6 bg-white p-4 h-56 overflow-hidden">
              <img
                src={
                  formData.postImage
                    ? formData.postImage
                    : "/assets/placeholder.png"
                }
                alt={formData.postTitle}
                className="w-full h-full object-contain object-center"
              />
            </div>

            {loading.progress > 0 && loading.progress < 100 ? (
              <>
                <div
                  class={`inline-block mb-2 ms-[calc(${loading.progress}%-1.25rem)] py-0.5 px-1.5 bg-primary-50 border border-primary-200 text-xs font-medium text-primary-600 rounded-lg`}
                >
                  {loading.progress}%
                </div>
                <div
                  class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                  role="progressbar"
                  aria-valuenow={loading.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="flex flex-col justify-center rounded-full overflow-hidden bg-primary-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-primary-500"
                    style={{ width: `${loading.progress}%` }}
                  ></div>
                </div>
              </>
            ) : (
              ""
            )}

            <div className="input_wrapper shadow-sm mb-6">
              <p className="text-lg capitalize font-medium mb-1 text-heading-600">
                Upload File
              </p>
              <input
                onChange={(e) => handleUpload(e, setFormData)}
                type="file"
                className="w-full text-gray-400 text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
              />
            </div>

            <button
              type="submit"
              className="publish_btn mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent text-md uppercase rounded-md text-white bg-primary-800 hover:bg-primary-900"
              disabled={loading.imageUploading}
            >
              {loading.imageUploading && (
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
              )}
              {loading.imageUploading
                ? "Loading..."
                : updateBlog
                ? "Update Blog"
                : "Publish Blog"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPost;
