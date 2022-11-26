import MainContent from './components/mainContent/MainContent';
import MainProjects from './components/mainProjects/MainProjects';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App" id="home">
            <Navbar />
            <div id="wrapper">
                <div className="main-container">
                    <div className="index">
                        <MainContent />
                    </div>
                    <MainProjects />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
