import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import './CardContent.css';
import SocialNetworks from './../socialNetworks/SocialNetworks';

const CardContent = () => {
    return (
        <div className="card">
            <div className="avatar-card secondary">
                <div id="divContent" className="content">
                    &emsp;&emsp;Hey guys, my name is João Mariano. I'm from Castanhal, Pará. I was born and raised here.
                    I'm currently an intern on the development team at Sea Telecom and a Software Engineering student at
                    the Universidade do Estado do Pará. Since i was a kid, i've been an enthusiast of everything that
                    involves technology, from hardware to software, and today, working as a developer, i'm completely
                    sure of my destiny and my future in the development career. I love to code!
                    <br /> <br />
                    &emsp;&emsp;I developed several management systems in the company where I work, most of them in
                    Django, I created docker images and they are all in containers, on the company's server. Creating a
                    small microservices ecosystem. I had experience with agile development. I took several courses of
                    personal and professional improvement. Among the technologies i had more contact with are React JS,
                    Django, JavaScript, Python, HTML and CSS.{' '}
                    <a href="/" className="link-hover">
                        Read more...
                    </a>
                </div>
                <div className="centered">
                    <SocialNetworks />
                </div>
            </div>
            <div className="content-card">
                <MiniCard />
            </div>
        </div>
    );
};

export default CardContent;
