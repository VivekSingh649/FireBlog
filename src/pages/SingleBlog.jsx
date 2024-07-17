import React, { useEffect, useState } from "react";
import PostBread from "../components/PostBread";
import PostSidebar from "../components/common/PostSidebar";
import { useParams } from "react-router-dom";
import PostInfo from "../components/BlogCard/PostInfo";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase/firebase";
import { useAppContext } from "../context/authProvider";
import { Helmet } from "react-helmet";

function SingleBlog() {
  const { category, postname } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const { formatUrlString } = useAppContext();

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const dbRef = await getDocs(collection(database, "blogPosts"));
        const blogs = dbRef.docs.map((blog) => blog.data());
        const singleBlog = blogs.filter(
          (blog) => formatUrlString(blog.postTitle) === postname
        );
        setPost(singleBlog[0]);
      } catch (error) {
        console.error("Single Post Fetching Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [postname, formatUrlString]);

  return (
    <>
      <Helmet>
        <title>{`FireBlog | ${post.postTitle}`}</title>
      </Helmet>
      <PostBread
        postName={post.postTitle}
        postLink={formatUrlString(post.postTitle)}
        cateLink={`/blog/${formatUrlString(post.category)}`}
        cateName={post.category}
      />
      <div className="bg-slate-50 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-white shadow-sm">
              <PostInfo
                imageUrl={post.postImage}
                postName={post.postTitle}
                category={post.category}
                date={post.createDate}
              />
              <div
                className="main-content p-4"
                dangerouslySetInnerHTML={{ __html: post.blogContent }}
              />
            </div>
            <div className="lg:ml-8 col-span-12 lg:col-span-4">
              <PostSidebar
                cateLink={category}
                singlePostLink="Empowering future with solar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
