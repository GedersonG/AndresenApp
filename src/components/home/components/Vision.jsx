import img from '../../../assets/images/homeContent/2.jpg';

export const Vision = () => {

    return (
        <div className="mosaic mt-2">

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Vision</h2>
                <p className="content" style={{fontSize: 30}}>
                En el año 2025 la Fundación Pía Autónoma Asilo Andresen será líder en la creación y acompañamiento de procesos de crecimiento integral de niño y niñas en amenaza y vulnerabilidad de sus derechos en un ambiente de amor, respeto, participación y organización; mediante de un trabajo de formación y fortalecimiento familiar.
                </p>
            </div>

        </div>
    );

}