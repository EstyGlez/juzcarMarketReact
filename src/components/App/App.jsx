import React from 'react';
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar"
import Loginmodal from "../LoginModal/Loginmodal.jsx"
import HomeView from "../Views/Home/HomeView.jsx"



function App() {

  return (
    <>
      <NavBar />
      <Loginmodal />
      <HomeView />
      <Footer />
    </>
  );
}

export default App
