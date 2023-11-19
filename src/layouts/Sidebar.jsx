import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Fundación Asilo Andresen",
    href: "/inicio",
    icon: "bi bi-house-door-fill"
  },
  {
    title: "Las delicias de la niña María",
    href: "/catalogo",
    icon: "bi bi-heart-fill",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  const customBackgroundColor = "rgba(230,228,21,255)";
  const customSelectedColor = "rgba(204, 105, 26, 1)";
  const textColor = "black";

  return (
    <div style={{ backgroundColor: customBackgroundColor }}>
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-1 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className="nav-link py-3"
                style={{
                  backgroundColor:
                    location.pathname === navi.href
                      ? customSelectedColor
                      : "transparent", // Color de fondo condicional
                  color: location.pathname === navi.href ? "white" : textColor, // Color de texto condicional
                  display: "flex", // Hace que el contenido se muestre en una fila
                  alignItems: "center", // Centra verticalmente los elementos
                }}
              >
                <i
                  className={navi.icon}
                  style={{
                    marginRight: "5px", // Ajusta el espacio entre el ícono y el texto
                  }}
                />
                <span
                  className="ms-3 d-inline-block"
                  style={{
                    width: "120px", // Ajusta el ancho del contenedor del texto
                  }}
                >
                  {navi.title}
                </span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
