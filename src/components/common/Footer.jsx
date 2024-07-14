import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto gap-1 max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <Link to="/" className="hover:underline">
            FireBlog
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/vivek-singh-299651245/"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              Linkdin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/VivekSingh649"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
