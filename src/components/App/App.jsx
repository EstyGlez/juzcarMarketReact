import React from 'react';
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar"
// import HomeView from "../Views/Home/HomeView.jsx"
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
