import React from "react";
import AdminPane from "../components/common/AdminPane";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import AddPost from "../admin/AddPost";
import Categories from "../admin/Categories";
import Update from "../admin/Update";

function Admin() {
  return (
    <>
      <div className="flex dashboard_wrapper">
        <AdminPane />
        <main className="flex-grow">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/add-category" element={<Categories />} />
            <Route path="/update-post" element={<Update />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default Admin;
