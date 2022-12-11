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

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <div className="App" id="home">
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
