import React from "react";
import HeroSection from "../components/HeroSection";
import Posts from "../components/Posts";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>{`FireBlog | A Blogging Website With Firebase`}</title>
      </Helmet>
      <HeroSection />
      <div className="py-16 container bg-primary-50 mt-4">
        <Posts />
      </div>
    </>
  );
}

export default Home;
