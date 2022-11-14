import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import MainContent from './components/mainContent/MainContent';
import MainProjects from './components/mainProjects/MainProjects';

function App() {
    return (
        <div className="App">
            <div id="wrapper">
                <div className="navbar-center">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <MainContent />
                    <MainProjects />
                </div>
            </div>
        </div>
    );
}

export default App;
