import { useState } from 'react';
import { MenuMobile } from './components/menuMobile';
import { Navbar } from './components/navbar/Navbar';
import CardContent from './components/cardContent/CardContent';
import MainProjects from './components/mainProjects/MainProjects';
import MainSkills from './components/mainSkills/MainSkills';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import './App.css';
import { IoIosArrowDropupCircle } from 'react-icons/io';

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    var buttonRollUp = document.getElementById('button-roll-up');

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            buttonRollUp.style.display = 'block';
        } else {
            buttonRollUp.style.display = 'none';
        }
    }

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
                    <a id="button-roll-up" href="#home" className="centered" alt="Voltar para o topo">
                        <IoIosArrowDropupCircle size={30} />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
