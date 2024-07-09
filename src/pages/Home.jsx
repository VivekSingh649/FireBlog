import React from "react";
import HeroSection from "../components/HeroSection";
import Posts from "../components/Posts";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="py-16 container bg-primary-50 mt-4">
        <Posts />
      </div>
    </>
  );
}

export default Home;
