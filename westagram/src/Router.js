import React from "react";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Kimsujeong from "./kimsujeong";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kimsujeong />} />ß
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
