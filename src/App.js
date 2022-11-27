import { useState } from 'react';
import { MenuMobile } from './components/menuMobile';
import { Navbar } from './components/navbar/Navbar';
import CardContent from './components/cardContent/CardContent';
import MainProjects from './components/mainProjects/MainProjects';
import Footer from './components/footer/Footer';
import './App.css';
import MainSkills from './components/mainSkills/MainSkills';

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <div className="App" id="home">
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Navbar setMenuIsVisible={setMenuIsVisible} />
            <div id="wrapper">
                <div className="main-container">
                    <CardContent />
                    <MainProjects />
                    <MainSkills />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
