import React from "react";
import LoginSujeong from "./pages/Login/LoginSujeong";
import MainSujeong from "./pages/Main/MainSujeong";
import Kimsujeong from "./kimsujeong";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kimsujeong />} />ß
        <Route path="/loginSujeong" element={<LoginSujeong />} />
        <Route path="/mainSujeong" element={<MainSujeong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
