import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CateBread from "../components/CateBread";
import BlogCard from "../components/BlogCard";
import PostSidebar from "../components/common/PostSidebar";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase/firebase";
import { useAppContext } from "../context/authProvider";
import BlogCardSkeleton from "../skeleton/BlogCardSkeleton";

function Categories() {
  const { category } = useParams();
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { formatUrlString } = useAppContext();

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const dbRef = await getDocs(collection(database, "blogPosts"));
        const blogs = dbRef.docs.map((blog) => blog.data());
        const singleBlogs = blogs.filter(
          (blog) => formatUrlString(blog.category) === category
        );
        setPosts(singleBlogs);
      } catch (error) {
        console.error("Single Category Fetching Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [category, formatUrlString]);

  return (
    <>
      <CateBread cateLink={`/blog/${category}`} cateName={category} />
      <div className="bg-slate-50 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <div className="grid gap-8 lg:grid-cols-2 gap-y-0">
                {post.length === 0 && !loading ? (
                  <h1>No Post Available</h1>
                ) : loading ? (
                  [...Array(4)].map((_, index) => (
                    <BlogCardSkeleton key={index} />
                  ))
                ) : (
                  post.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      singlePostLink={blog.postTitle}
                      cateLink={blog.category}
                      postTitle={blog.postTitle}
                      postImage={blog.postImage}
                      date={blog.createDate}
                      catgory={blog.category}
                    />
                  ))
                )}
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
