import React from "react";
import { Link, NavLink } from "react-router-dom";

function AdminPane() {
  const dashMenu = [
    {
      menuName: "Add Post",
      iconClass: "bi-plus-circle",
      menuLink: "/admin/add-post",
    },
    {
      menuName: "Add Category",
      iconClass: "bi-tags-fill",
      menuLink: "/admin/add-category",
    },
  ];

  return (
    <aside className="flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto bg-primary-900 border-r">
      <Link to="/" className="mx-auto">
        <img
          src="../../public/Firebase White logo.svg"
          className="h-12"
          alt="FireBlog Logo"
        />
      </Link>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <h4 className="mx-2 text-xl mt-2 font-medium text-white">John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-white">
          john@example.com
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6 dashboard_menu">
        <nav>
          <NavLink
            className="flex items-center px-4 py-2 rounded-md"
            to="/admin/dashboard"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Dashboard</span>
          </NavLink>
          {dashMenu.map((menu) => (
            <NavLink
              className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md"
              to={menu.menuLink}
            >
              <i className={`${menu.iconClass} bi text-xl`}></i>

              <span className="mx-4 font-medium">{menu.menuName}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default AdminPane;