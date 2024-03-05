import React, { useState } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginmodal from "../LoginModal/Loginmodal";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar className="navbarStyle">
        <Container>
          <Navbar.Brand href="#home"> 
            <NavLink to='/HomeView'>
              <img
                src="src\assets\juzcarLogo.png"
                className="juzgar-logo"
                alt="Logo de Júzcar"
              />
            </NavLink>
          </Navbar.Brand> 
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end navbar-style">
            <Button className="add-product mx-4">Subir producto</Button>
            <div className="navbar-icons">
              <Loginmodal />
              <img
                src="src\assets\icon-shop.svg"
                className="icon-shop"
                alt=""
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;