import React from 'react';
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar"
import Loginmodal from "../LoginModal/Loginmodal.jsx"
import HomeView from "../Views/Home/HomeView.jsx"
import UserProfile from '../Views/UserProfile/UserProfile.jsx';



function App() {

  return (
    <>
      <NavBar />
      <Loginmodal />
      <HomeView/>
      <UserProfile/>
      <Footer />
      <Footer />
    </>
  )
}

export default App
