import img from '../../../assets/images/homeContent/5.jpg';

export const Parnerts = () => {

    return (
        <div className="mosaic mt-2">

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Red de padrinos</h2>
                <p className="content" style={{fontSize: 23}}>
                    Son personas de buena voluntad que generosamente dan una ofrenda mensual de 50 mil o más pesos en favor de los niños y niñas, que son atendidos con respeto y ternura en la Fundación Pía Autónoma Asilo Andresen en alimentación, asesorías de tareas, apoyo lúdico-pedagógico. También apoyan  proyectos como Las Delicias de La Niña María con el cual se busca formar a sus padres de familia para que puedan tener oportunidades de emprendimiento o empleabilidad y así puedan mejorar su calidad de vida.

                    De este modo la Red Padrino con su ayuda, hace posible el bienestar integral de los más pequeños y necesitados.
                </p>
            </div>

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

        </div>
    );

}