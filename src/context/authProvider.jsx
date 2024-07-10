import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, database } from "../firebase/firebase";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";

export const AuthContext = createContext();

export const useAppContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState({
    authStateChange: true,
    addSingleCategory: false,
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
      toast.success("Category added successfully");
    } catch (error) {
      console.error("Error adding a category", error);
      toast.error("Failed to add category");
    } finally {
      setLoading((prevState) => ({
        ...prevState,
        addSingleCategory: false,
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, signInWithGooglePopup, addCategory, loading }}
    >
      {!loading.authStateChange && children}
    </AuthContext.Provider>
  );
};
