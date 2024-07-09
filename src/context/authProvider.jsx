import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const useAppContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  const printHello = () => {
    toast.success("Hello World");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, signInWithGooglePopup, printHello }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
