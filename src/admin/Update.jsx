import React, { useEffect, useRef, useState } from "react";
import AddPost from "./AddPost";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../firebase/firebase";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function Update() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const docRef = doc(database, "blogPosts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return setSinglePost(docSnap.data());
        } else {
          return true;
        }
      } catch (error) {
        toast.error("No blog found");
        console.log(error);
      }
    };
    fetchUser();
    console.log(singlePost);
  }, [id]);

  const updatePost = async (data) => {
    const docRef = doc(database, "blogPosts", id);
    try {
      await updateDoc(docRef, data);
      toast.success("Blog Update");
    } catch (error) {
      console.log("Update Blog", error);
      toast.error("Something went wrong try again");
    }
  };

  return (
    <>
      <Helmet>
        <title>{`FireBlog | Update`}</title>
      </Helmet>
      <AddPost updateBlog={singlePost} updatePost={updatePost} />
    </>
  );
}

export default Update;
