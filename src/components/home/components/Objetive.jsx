import img from '../../../assets/images/homeContent/3.jpg';

export const Objetive = () => {

    return (
        <div className="mosaic mt-2">

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Objetivo</h2>
                <p className="content" style={{fontSize: 29}}>
                Brindar los medios necesarios para que los niños y niñas vinculados a la Fundación Pía Autónoma Asilo Andresen, reciban alimentación, fortalecimiento de habilidades y lazos familiares sintiéndose amados, protegidos y apoyados mediante actividades, intervenciones y orientaciones que contribuyan a su crecimiento sano.
                </p>
            </div>

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

        </div>
    );

}