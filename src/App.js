import { useState } from 'react';
import { MenuMobile } from './components/menuMobile';
import { Navbar } from './components/navbar/Navbar';
import MainContent from './components/mainContent/MainContent';
import MainProjects from './components/mainProjects/MainProjects';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <div className="App" id="home">
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Navbar setMenuIsVisible={setMenuIsVisible} />
            <div id="wrapper">
                <div className="main-container">
                    <MainContent />
                    <MainProjects />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
