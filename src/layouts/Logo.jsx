import { Link } from "react-router-dom";
import React from 'react'
import myLogo from '../assets/images/logos/fundacion_logo.png'

export const Logo = React.memo(() => {
    const logoStyle = {
        width: "140px",
        height: "auto",
        marginLeft: "30px",
        verticalAlign: "middle",
    };

    return (
        <Link to="/">
            <img
                src={myLogo} // Utiliza la imagen importada
                alt="Mi Logo"
                style={logoStyle}
            />
        </Link>
    );
});
