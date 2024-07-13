import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, database, storage } from "../firebase/firebase";
import { toast } from "react-toastify";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAppContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState({
    authStateChange: true,
    addSingleCategory: false,
    imageUploading: false,
    progress: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading((prevState) => ({
        ...prevState,
        authStateChange: false,
      }));
    });

    return unsubscribe;
  }, []);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  const addCategory = async (data) => {
    setLoading((prevState) => ({
      ...prevState,
      addSingleCategory: true,
    }));
    try {
      await addDoc(collection(database, "categories"), { data });
      toast.success("Category added successfully.");
    } catch (error) {
      console.error("Error adding a category", error);
      toast.error("Failed to add category.");
    } finally {
      setLoading((prevState) => ({
        ...prevState,
        addSingleCategory: false,
      }));
    }
  };

  const handleUpload = async (e, setFormData) => {
    setLoading((prevState) => ({
      ...prevState,
      imageUploading: true,
    }));

    const file = e.target.files[0];
    try {
      const imageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(imageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setLoading((prevState) => ({
            ...prevState,
            progress: Math.floor(progress),
          }));
        },
        (error) => {
          console.error(error);
          toast.error("Error occurred during upload. Please try again.");
          setLoading((prevState) => ({
            ...prevState,
            imageUploading: false,
          }));
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setFormData((prevData) => ({
            ...prevData,
            postImage: downloadURL,
          }));
          toast.success("Image uploaded successfully.");
          setLoading((prevState) => ({
            ...prevState,
            imageUploading: false,
          }));
        }
      );
    } catch (error) {
      toast.error("Error occurred. Please try again.");
      console.error("Error during image upload", error);
      setLoading((prevState) => ({
        ...prevState,
        imageUploading: false,
      }));
    }
  };

  const addPost = async (formData) => {
    setLoading((prevState) => ({
      ...prevState,
      imageUploading: true,
    }));
    const newFromData = {
      ...formData,
      createDate: new Date().toLocaleString(),
    };

    const dbRef = collection(database, "blogPosts");

    try {
      await addDoc(dbRef, newFromData);
      setLoading((prevState) => ({
        ...prevState,
        imageUploading: false,
      }));
      toast.success("Post Added successfully");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log("Post adding", error);
    }
  };

  const formatUrlString = (str) => {
    return str ? str.toLowerCase().replace(/\s+/g, "-") : "";
  };

  const deletePost = async (id, Fetch) => {
    try {
      const postRef = doc(database, "blogPosts", id);
      await deleteDoc(postRef);
      Fetch();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signInWithGooglePopup,
        addCategory,
        loading,
        handleUpload,
        addPost,
        formatUrlString,
        deletePost,
      }}
    >
      {!loading.authStateChange && children}
    </AuthContext.Provider>
  );
};
