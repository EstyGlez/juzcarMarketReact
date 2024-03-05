import React from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginmodal from "../LoginModal/Loginmodal";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function NavBar() {
  const handleUploadProductClick = () => {
    Swal.fire({
      imageUrl: "https://i.postimg.cc/SsxJhnPQ/kisspng-grouchy-smurf-brainy-smurf-gutsy-smurf-gargamel-sm-smurfs-5ac28a9fce4612-6096295315226989118.png",
      imageWidth: 75,
      imageHeight: 110,
      title: "¡Aún no has iniciado sesión!",
      text: "Por favor, inicia sesión para subir un producto.",
      showConfirmButton: true,
    });
  };
  const location = useLocation();
 
  
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
          {location.pathname !== '/UserProfile' && (
            <Button className="add-product" onClick={handleUploadProductClick}>
              Subir producto
            </Button>
             )}
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
