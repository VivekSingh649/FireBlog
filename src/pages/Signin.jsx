import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase";
import { useAppContext } from "../context/authProvider";

function SignUpForm() {
  const [signupLoading, setSignupLoading] = useState(false);
  const { signInWithGooglePopup, printHello } = useAppContext();
  const naviage = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const signInUser = async () => {
    setSignupLoading(true);
    try {
      await signInWithEmailAndPassword(auth, login.email, login.password);
      toast.success("Sign in Successfully");
      setSignupLoading(false);
      return true;
    } catch (error) {
      setSignupLoading(false);
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signInUser();
    if (success) {
      setLogin({
        email: "",
        password: "",
      });
      naviage("/admin/dashboard");
    }
  };

  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      toast.success("Sign in Successfully");
      if (response) {
        naviage("/admin/dashboard");
      }
      return true;
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="py-12 flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                onChange={handleChange}
                value={login.email}
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border-gray-300 border-solid border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={login.password}
                  type="password"
                  required
                  className="block w-full px-3 py-2 border border-solid border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <i className="bi bi-eye"></i>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {signupLoading ? "...Loading" : "Sign in"}
            </button>
          </form>
          <div className="mt-6 text-center">
            Don't have an account?
            <Link
              to="/sign-up"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Sign up
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className="border-t border-gray-300 w-full" />
            <div className="text-gray-500 mx-4">or</div>
            <div className="border-t border-gray-300 w-full" />
          </div>
          <button
            type="button"
            className="mt-6 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            onClick={logGoogleUser}
          >
            <img src="./Google.svg" alt="Google" className="h-5 mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
