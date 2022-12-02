import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FinanceManage from '../../assets/finance-manage.jpeg';
import './Carousel.css';

const Carouselzin = () => {
    return (
        <div>
            <Carousel showStatus={false} infiniteLoop>
                <div className="carousel-card">
                    <div className="carousel-image">
                        <img src={FinanceManage} alt="" />
                    </div>
                    <div>
                        <h1 className="">Legend 1</h1>
                    </div>
                </div>
                <div className="carousel-card">
                    <div className="carousel-image">
                        <img src={FinanceManage} alt="" />
                    </div>
                    <div>
                        <h1 className="">Legend 1</h1>
                    </div>
                </div>
                <div className="carousel-card">
                    <div className="carousel-image">
                        <img src={FinanceManage} alt="" />
                    </div>
                    <div>
                        <h1 className="">Legend 1</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Carouselzin;
