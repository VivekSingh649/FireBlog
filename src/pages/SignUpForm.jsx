import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase";
import { Helmet } from "react-helmet";

const SignUpForm = () => {
  const [signupLoading, setSignupLoading] = useState(false);
  const naviage = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    setSignupLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, {
        displayName: formData.firstName,
      });
      toast.success("Signup Successfully");
      setSignupLoading(false);
      return true;
    } catch (error) {
      setSignupLoading(false);
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleSignup();
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      naviage("/admin/dashboard");
    }
  };

  return (
    <>
      <Helmet>
        <title>{`FireBlog | Sign Up`}</title>
      </Helmet>
      <div className="py-10 flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="lg:flex gap-x-2 items-center">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-solid border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-solid border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>
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
                value={formData.email}
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-solid border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
                  value={formData.password}
                  type="password"
                  required
                  className="block w-full px-3 py-2 border border-solid border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <i className="bi bi-eye"></i>
                </span>
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>
              <div className="relative mt-1">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
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
              {signupLoading ? "...Loading" : "Sing up"}
            </button>
          </form>
          <div className="mt-6 text-center">
            Already have an account?
            <Link
              to="/sign-in"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
