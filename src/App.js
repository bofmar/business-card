import Info from './componenets/Info';
import Buttons from './componenets/Buttons';
import About from './componenets/About';
import picture from './images/pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={picture} alt='A picture of me' className='picture' />
      <Info />
      <Buttons />
      <About />


    </div>
  );
}

export default App;
