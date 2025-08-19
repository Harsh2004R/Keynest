import React from "react";

import Navbar from "../AppComponents/Navbar.jsx";
import PageNotExisit from "../Pages/PageNotExisit.jsx";
import Signup from "../Pages/Signup.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login.jsx";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotExisit />} />
    </Routes>
  );
}

export default AllRoutes;
