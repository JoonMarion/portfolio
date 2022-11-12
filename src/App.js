import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import MainContent from './components/mainContent/MainContent';
function App() {
    return (
        <div className="App">
            <div id="wrapper">
                <div className="navbar-center">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default App;
