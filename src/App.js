import MainContent from './components/mainContent/MainContent';
import MainProjects from './components/mainProjects/MainProjects';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div id="wrapper">
                <div className="main-container">
                    <MainContent />
                    <MainProjects />
                </div>
            </div>
        </div>
    );
}

export default App;
