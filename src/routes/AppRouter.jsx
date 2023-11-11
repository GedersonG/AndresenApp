import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../components/home/Home"
import { Catalogue } from "../components/catalogue/Catalogue";
import { FullLayout } from '../layouts/FullLayout';

export const AppRouter = () => {

    return (
        <Routes>
            <Route
                element={<FullLayout />} // Renderiza tu nuevo FullLayout
            >
                {/* Define las rutas anidadas dentro de FullLayout */}
                <Route index path="/inicio" element={<Home />} />
                <Route path="/catalogo" element={<Catalogue />} />
                {/* Otras rutas de tu nuevo proyecto */}
            </Route>
            <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
    )
}
