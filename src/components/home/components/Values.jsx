import img from '../../../assets/images/homeContent/4.jpg';

export const Values = () => {

    return (
        <div className="mosaic mt-2">

            <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="Imagen ?" />
            </div>

            <div className="text-container">
                <h2 className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Valores</h2>
                <p className="content" style={{fontSize: 40, fontFamily: 'revert'}}>
                    Amor, honestidad, responsabilidad y paz.
                </p>
            </div>

        </div>
    );

}