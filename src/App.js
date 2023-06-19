import { useState } from 'react';
import { MenuMobile } from './components/menuMobile';
import { Navbar } from './components/navbar/Navbar';
import CardContent from './components/cardContent/CardContent';
import MainProjects from './components/mainProjects/MainProjects';
import MainSkills from './components/mainSkills/MainSkills';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import './App.css';
import ScrollToTop from 'react-scroll-to-top';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };

    return (
        <div className="App" id="home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    particles: {
                        number: {
                            value: 10,
                            density: {
                                enable: false,
                                value_area: 300,
                            },
                        },
                        color: {
                            value: 'rgb(241, 243, 240)',
                        },
                        shape: {
                            type: 'circle',
                            options: {
                                sides: 1,
                            },
                        },
                        opacity: {
                            value: 0.4,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 4,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        rotate: {
                            value: 0,
                            random: true,
                            direction: 'clockwise',
                            animation: {
                                enable: true,
                                speed: 4,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 500,
                            color: '#ffffff',
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: ['repulse'],
                            },
                            onclick: {
                                enable: false,
                                mode: 'bubble',
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                    background: {
                        color: '#0d1117',
                        image: '',
                        position: '50% 50%',
                        repeat: 'no-repeat',
                        size: 'cover',
                    },
                }}
            />
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Navbar setMenuIsVisible={setMenuIsVisible} />

            <CardContent />
            <div id="wrapper">
                <div className="main-container">
                    <MainProjects />
                    <MainSkills />
                    <Contacts />
                    <ScrollToTop className="centered button-roll-up" top={500} smooth />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
