import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent';
import MainProjects from './components/mainProjects/MainProjects';
import './App.css';

function App() {
    return (
        <div className="App">
            <div id="wrapper">
                <div className="navbar-center">
                    <Sidebar />
                </div>
                <div className="container">
                    <MainContent />
                    <MainProjects />
                </div>
            </div>
        </div>
    );
}

export default App;
