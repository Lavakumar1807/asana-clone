import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Home/>
         <About/>
         <Footer/>
    </div>
  );
}

export default App;
