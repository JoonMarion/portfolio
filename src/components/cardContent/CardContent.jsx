import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';

const CardContent = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="avatar-card">
                    <div id="divContent" class="content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea, numquam reprehenderit
                        tempora sunt distinctio ad perspiciatis enim vero esse quas cumque aliquam, repudiandae
                        voluptatem eligendi aspernatur. Porro, iure iste. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Harum, ea, numquam reprehenderit tempora sunt distinctio ad perspiciatis enim
                        vero esse quas cumque aliquam, repudiandae voluptatem eligendi aspernatur. Porro, iure iste.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea, numquam reprehenderit
                        tempora sunt distinctio ad perspiciatis enim vero esse quas cumque aliquam, repudiandae
                        voluptatem eligendi aspernatur. Porro, iure iste. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Harum, ea, numquam reprehenderit tempora sunt distinctio ad perspiciatis enim
                        vero esse quas cumque aliquam, repudiandae voluptatem eligendi aspernatur. Porro, iure iste.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea, numquam reprehenderit
                        tempora sunt distinctio ad perspiciatis enim vero esse quas cumque aliquam, repudiandae
                        voluptatem eligendi aspernatur. Porro, iure iste.
                    </div>
                </div>
                <div className="content-card">
                    <MiniCard />
                </div>
            </div>
        </div>
    );
};

export default CardContent;
