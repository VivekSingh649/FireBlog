import React from "react";
import { Link } from "react-router-dom";
import useAllPosts from "../../utilities/useAllPosts";
import { useAppContext } from "../../context/authProvider";

function PostSidebar() {
  const { formatUrlString } = useAppContext();
  const { allPosts, allCategory } = useAllPosts();

  return (
    <>
      <aside>
        <div className="widget widget-recent-post">
          <h4 className="widget-title text-2xl font-semibold">Recent News</h4>
          <ul>
            {allPosts.slice(0, 5).map((blog) => (
              <li className="bg-white rounded-xl" key={blog.id}>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={blog.postImage}
                      alt={blog.postTitle}
                      className="h-20 w-20 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 self-center">
                    <h6 className="text-lg leading-tight font-medium hover:text-primary-700 mb-1">
                      <Link
                        to={`/blog/${formatUrlString(
                          blog.category
                        )}/${formatUrlString(blog.postTitle)}`}
                      >
                        {blog.postTitle}
                      </Link>
                    </h6>
                    <div className="flex items-center">
                      <svg
                        stroke="#f93c00"
                        fill="#f93c00"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                      <span>
                        {new Date(blog.createDate).toLocaleString("en-us", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget widget_catagory">
          <h4 className="widget-title text-2xl font-semibold">Categories</h4>
          <ul className="flex items-center gap-4 flex-wrap">
            {allCategory.map((cate) => (
              <li
                key={cate.id}
                className="w-max block py-2 px-5 shadow-sm rounded-sm bg-white"
              >
                <Link
                  to={`/blog/${formatUrlString(cate.data)}`}
                  className="text-heading-600 font-medium"
                >
                  {cate.data}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default PostSidebar;
