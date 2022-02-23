import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/app/Home";
import Authpage from "./pages/auth/AuthPage";
import Signup from "./pages/auth/SignUp";
import "./index";
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Authpage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Home />
    </>
  );
};

export default App;
