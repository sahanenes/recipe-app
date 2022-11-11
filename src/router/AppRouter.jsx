import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
