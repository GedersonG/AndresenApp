import img from '../../../assets/images/homeContent/9.jpg';

export const JoinUs = () => {

    return (
        <div className="mosaic mt-2">

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Únete a esta obra y conoce más</h2>
                <p className="content" style={{fontSize: 36}}>
                    <p><strong>Diósesis de Cúcuta:</strong><a href='http://diocesisdecucuta.com/diocesis2/'>Página Web</a></p>
                    <p><strong>Facebook:</strong><a href="https://www.facebook.com/asilo.andresen">Fundación Asilo Andresen</a></p>
                    <p><strong>Instagram:</strong><a href="https://www.instagram.com/lasdeliciasdelaninamaria/">Las delicias de la niña maría</a></p>
                </p>
                {/* TODO: QRS */}
            </div>

        </div>
    );

}