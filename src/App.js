import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/app/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default App;
