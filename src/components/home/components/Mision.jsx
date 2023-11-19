import img from '../../../assets/images/homeContent/1.jpg';

export const Mision = () => {

    return (
        <div className="mosaic mt-2">

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Mision</h2>
                <p className="content" style={{fontSize: 32}}>
                    Ejercer la caridad con los niños y niñas en amenaza y estado de vulnerabilidad de derechos, en un ambiente de amor, respeto, participación y organización. Así mismo, acompañar a los padres y madres de familia para que asuman con responsabilidad el proceso de formación integral de sus hijos e hijas en el mejoramiento de su <strong>calidad de vida.</strong>
                </p>
            </div>

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

        </div>
    );

}