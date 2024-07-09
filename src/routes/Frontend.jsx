import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import Categories from "../pages/Categories";
import SingleBlog from "../pages/SingleBlog";
import Signin from "../pages/Signin";
import Signup from "../pages/SignUpForm";

function Frontend() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:category" element={<Categories />} />
        <Route path="/blog/:category/:postname" element={<SingleBlog />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Frontend;
