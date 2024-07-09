import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CateBread from "../components/CateBread";
import BlogCard from "../components/BlogCard";
import PostSidebar from "../components/common/PostSidebar";

function Categories() {
  const { category } = useParams();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <CateBread cateLink={`/blog/${category}`} cateName={category} />
      <div className="bg-slate-50 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <div className="grid gap-8 lg:grid-cols-2 gap-y-0">
                <BlogCard
                  singlePostLink="Transforming businesses one pixel at a time"
                  cateLink={category}
                />
                <BlogCard
                  singlePostLink="Transforming businesses one pixel at a time"
                  cateLink={category}
                />
                <BlogCard
                  singlePostLink="Transforming businesses one pixel at a time"
                  cateLink={category}
                />
                <BlogCard
                  singlePostLink="Transforming businesses one pixel at a time"
                  cateLink={category}
                />
              </div>
            </div>
            <div className="lg:ml-8 col-span-12 lg:col-span-4">
              <PostSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
