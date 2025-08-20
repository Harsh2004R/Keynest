import React from "react";
import PageNotExisit from "../Pages/PageNotExisit.jsx";
import Signup from "../Pages/Signup.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login.jsx";
import Home from "../Pages/Home.jsx";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotExisit />} />
    </Routes>
  );
}

export default AllRoutes;
