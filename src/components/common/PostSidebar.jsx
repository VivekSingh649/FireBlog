import React from "react";
import { Link } from "react-router-dom";
import { formatUrlString } from "../BlogCard";

function PostSidebar({ cateLink, singlePostLink }) {
  return (
    <>
      <aside>
        <div className="widget widget_search">
          <form className="search-form">
            <input type="text" placeholder="Key word" />
            <button className="submit-btn" type="submit">
              <i className="bi bi-chevron-right text-white text-xl"></i>
            </button>
          </form>
        </div>
        <div className="widget widget-recent-post">
          <h4 className="widget-title text-2xl font-semibold">Recent News</h4>
          <ul>
            <li className="bg-white rounded-xl">
              <div className="media">
                <div className="media-left">
                  <img
                    src="https://themexriver.com/wp/magezix/wp-content/uploads/2022/05/travel-new.jpg"
                    alt="blog"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 self-center">
                  <h6 className="text-lg leading-tight hover:text-primary-700 mb-1">
                    <Link
                      to={`/blog/${formatUrlString(cateLink)}/${formatUrlString(
                        singlePostLink
                      )}`}
                    >
                      Empowering future with solar.
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
                    <span>15 October</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="widget widget_catagory">
          <h4 className="widget-title text-2xl font-semibold">Categories</h4>
          <ul className="catagory-items">
            <li>
              <Link to="/blog">
                Business <span className="bg-primary-50">3</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default PostSidebar;
