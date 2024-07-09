import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Admin from "./routes/Admin";
import Frontend from "./routes/Frontend";
import TopLoadingBar from "react-top-loading-bar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./context/protectedRoute";

function App() {
  const loadingBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => loadingBarRef.current.continuousStart();
    const handleFinish = () => loadingBarRef.current.complete();

    handleStart();
    const timer = setTimeout(handleFinish, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <TopLoadingBar
        ref={loadingBarRef}
        color="#f93c00"
        height={3}
        fixed={true}
      />
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
