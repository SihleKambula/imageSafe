import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/app/Home";
import Authpage from "./pages/auth/AuthPage";
import Signup from "./pages/auth/SignUp";
import "./index";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./database/firebase";
const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  });
  return (
    <Routes>
      <Route path='/' element={<Home user={user} />} />
      <Route path='/login' element={<Authpage />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default App;
