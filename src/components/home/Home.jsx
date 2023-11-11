import { Card, CardBody, CardTitle } from "reactstrap";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.5)" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.5)" }}
            onClick={onClick}
        />
    );
}

export const Home = () => {

    const settings = {
        dots: true,
        lazyLoad: true,
        autoplaySpeed: 3500,
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true
    };

    return (
        <div>
            <Card>
                <CardTitle
                    className="homepage-title"
                    style={{
                        paddingLeft: '1rem',
                        alignItems: 'center'
                    }}
                >
                    <div style={{ paddingLeft: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 16 16"
                            fill="rgb(204, 105, 26)"
                            className="bi bi-house-heart-fill homepage-icon"
                            style={{
                                marginRight: '1rem',
                                marginTop: '-1rem'
                            }}
                        >
                            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
                            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
                        </svg>

                        <span
                            className="homepage-text"
                            style={{
                                color: 'rgb(204, 105, 26)',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                            }}
                        >
                            Inicio
                        </span>
                    </div>
                </CardTitle>
                <CardBody>
                    <div className="container">
                        <Slider {...settings} className="slider" >
                            <div>
                                <img
                                    className="sliderimg"
                                    src="src/assets/images/carousel/1.jpg"
                                />
                            </div>
                            <div>
                                <img
                                    className="sliderimg"
                                    src="src/assets/images/carousel/2.jpg"
                                />
                            </div>
                            <div>
                                <img
                                    className="sliderimg"
                                    src="src/assets/images/carousel/3.jpg"
                                />
                            </div>
                        </Slider>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
