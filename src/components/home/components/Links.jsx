import img from '../../../assets/images/homeContent/8.jpg';

export const Links = () => {

    return (
        <div className="mosaic mt-2">

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Enlaces directivo y operativo</h2>
                <p className="content" style={{fontSize: 31}}>
                    <p><strong>Enlace Directivo:</strong> Director y Representante Legal, Pbro. José Elver Rojas Herrera.</p>
                    <p>Correo electrónico: <a href="mailto:elverpbro@yahoo.com">elverpbro@yahoo.com</a></p> 
                    <p>Teléfono: <a href="tel:3204137725">3204137725</a></p>
                    <p><strong>Enlace Operativo:</strong> Coordinadora, Martha Yuleima León Diaz.</p>
                    <p>Correo electrónico: <a href="mailto:asilotrabajopsico@gmail.com">asilotrabajopsico@gmail.com</a></p> 
                    <p>Teléfono: <a href="tel:3124044622">3124044622</a></p>
                </p>
            </div>

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

        </div>
    );

}