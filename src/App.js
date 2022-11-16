import Info from './componenets/Info';
import Buttons from './componenets/Buttons';
import About from './componenets/About';
import Interests from './componenets/Interests';
import Footer from './componenets/Footer';
import picture from './images/pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='img-container' >
        <img src={picture} alt='A picture of me' className='picture' />
      </div>
      <Info />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
