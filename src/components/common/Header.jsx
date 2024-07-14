import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "/firebase/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useAppContext } from "/context/authProvider";

function Header() {
  const categories = ["sports", "technology", "politics", "traveling"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { currentUser } = useAppContext();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Logout Successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const renderUserMenu = () => (
    <div
      className={`z-50 ${
        userMenuOpen ? "" : "hidden"
      } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow submenu`}
      id="user-dropdown"
    >
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          {currentUser.displayName}
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
          {currentUser.email}
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="/admin/dashboard"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <a
            href="#"
            onClick={handleSignOut}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );

  const renderAuthButtons = () => (
    <div className="flex">
      <Link
        to="/sign-in"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign In
      </Link>
      <Link
        to="/sign-up"
        className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Sign up
      </Link>
    </div>
  );

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/public/FireBlog Logo.svg"
              className="h-12"
              alt="Flowbite Logo"
            />
          </NavLink>

          <div className="flex gap-x-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            {currentUser && (
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded={userMenuOpen}
              >
                <span className="sr-only">Open user menu</span>
                {currentUser.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={currentUser.photoURL}
                    alt="user photo"
                  />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-800">
                    <h1 className="text-white text-xl">
                      {currentUser.displayName.charAt(0).toUpperCase()}
                    </h1>
                  </div>
                )}
              </button>
            )}
            {currentUser ? renderUserMenu() : renderAuthButtons()}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>

          <div
            className={`items-center justify-between ${
              menuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="main-menu flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                >
                  Home
                </NavLink>
              </li>
              {categories.map((menu, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/blog/${menu}`}
                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                  >
                    {menu}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
