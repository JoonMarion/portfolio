import { useEffect, useState, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import './Carousel.css';

const Carouselzin = () => {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/projects.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!data || !data.length) {
        return null;
    }

    return (
        <div className="container">
            <div className="carousel-button">
                <SlArrowLeft className="icon" onClick={handleLeftClick} size={30} color="white" />
            </div>

            <div className="carousel" ref={carousel}>
                {data.map((item) => {
                    const { name, image, description } = item;
                    return (
                        <div className="card-project">
                            <div className="image">
                                <img src={image} alt="" />
                            </div>

                            <div className="info">
                                <h3>{name}</h3>
                                <br />
                                <p className="primary">{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="carousel-button">
                <SlArrowRight className="icon" onClick={handleRightClick} size={30} color="white" />
            </div>
        </div>
    );
};

export default Carouselzin;
