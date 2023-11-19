import img from '../../../assets/images/homeContent/7.png';

export const Volunteering = () => {

    return (
        <div className="mosaic mt-2">

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Voluntariado</h2>
                <p className="content" style={{fontSize: 27}}>
                    Son personas que manifiestan su amor a Dios en el servicio y atención de los más pequeños y necesitados. A esta obra se unen los Colegios, Institutos y Universidades en sus Prácticas Profesionales, integrantes de los Grupos Pastorales y de las Parroquias, y demás que independientemente buscan unirse.
                    Estas personas donan su tiempo con amor y sin discriminación, sirven en diferentes labores de la casa y de atención a los niños.
                    Si deseas hacer parte de este equipo, no pierdas la oportunidad y únete Comunicándote: <a href="mailto:asilotrabajopsico@gmail.com">asilotrabajopsico@gmail.com</a> - <a href="tel:3124044622">3124044622</a>.
                </p>
            </div>

        </div>
    );

}