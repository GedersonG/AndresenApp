import React from "react";
import {
  Navbar,
  Button,
} from "reactstrap";
import { Logo } from './Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const headerStyle = {
    backgroundColor: "rgba(231,196,30,255)", // Color de fondo personalizado
  };

  const logoColor = "white"; // Color del logo

  const welcomeTextStyle = {
    fontSize: "32px", // Tamaño de fuente grande
    color: "rgb(204, 105, 26)", // Color de texto azul
    fontFamily: "Lucida Handwriting", // Fuente de letra elegante
  };

  return (
    <Navbar style={headerStyle} light expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo color={logoColor} key={Math.random()} /> {/* Pasa el color al componente de Logo */}
        </div>
        <div style={welcomeTextStyle}>
          ¡Bienvenido a la Fundación Asilo Andresen!
        </div>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">

        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>
    </Navbar>
  );
};