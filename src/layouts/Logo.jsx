import { Link } from "react-router-dom";
import React from 'react'

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
                src={'src/assets/images/logos/fundacion_logo.png'} // Utiliza la imagen importada
                alt="Mi Logo"
                style={logoStyle}
            />
        </Link>
    );
});
