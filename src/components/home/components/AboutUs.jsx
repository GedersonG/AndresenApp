import img from '../../../assets/images/carousel/1.jpg';

export const AboutUs = () => {

    return (
        <div className="mosaic mt-2">

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ¿Quienes somos?" />
            </div>

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>¿Quiénes somos?</h2>
                <p className="content">
                    Somos una institución sin ánimo de lucro, destinada al cuidado, promoción y protección de la niñez más necesitada de la ciudad de Cúcuta y su área metropolitana. Esta obra fue fundada en 1907 por los esposos Teresa Andresen y Christiam Andresen Moler quienes, con la Hermana Natividad, religiosa Dominica de la Presentación de la Santísima Virgen, pusieron en funcionamiento un edificio construido en su totalidad para el servicio exclusivo de los niños y niñas en situación de abandono y vulnerabilidad de Cúcuta.
                    Cuenta con una Junta Directiva donde el señor Obispo de la Diócesis de Cúcuta es su presidente.
                    En el 2017 la Fundación pasó a ser administrada por la Diócesis de Cúcuta y su razón social hoy día es Fundación Pía Autónoma Asilo Andresen, los sacerdotes que administran la obra mantienen su objetivo fundacional en la atención de los niños y niñas más vulnerables de la región.
                </p>
            </div>

        </div>
    );

}