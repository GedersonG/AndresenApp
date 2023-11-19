import img from '../../../assets/images/homeContent/6.jpg';

export const Projects = () => {

    return (
        <div className="mosaic mt-2">

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Proyectos de la fundación</h2>
                <p className="content" style={{fontSize: 21}}>
                    <p>La Fundación Pía Autónoma Asilo Andresen cuenta con dos Proyectos de atención:</p>

                    <p><strong>El Centro de Caridad Infantil “La Niña María”:</strong> Atiende niños y niñas vulnerables con edades entre los 4 a 10 años de edad, en su mayoría hijos de Colombianos retornados y Venezolanos Migrantes, quienes se dedican diariamente al trabajo informal o rebusque con el fin de conseguir lo necesario para el sostenimiento de sus familias.
                        A los niños y niñas se les brinda alimentación y acompañamiento lúdico pedagógico de lunes a viernes de 7:00 AM a 5:00 PM. </p>

                    <p><strong>Proyecto medios de vida “Las Delicias de la Niña María:</strong> Es un proyecto de formación a padres de familia de los niños y niñas que se atienden en la Fundación con el objetivo de formarlos en temas de Panadería, repostería, comidas rápidas y atención al cliente con el fin de que puedan tener oportunidades de emprendimiento o empleabilidad en búsqueda de mejorar su calidad de vida.</p>
                </p>
            </div>

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

        </div>
    );

}