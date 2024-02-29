import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App/App";
import HomeView from "./components/Views/Home/HomeView";
import UserProfile from "./components/Views/UserProfile/UserProfile";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/UserProfile" element={<UserProfile />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
