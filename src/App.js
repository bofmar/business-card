import picture from './images/pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={picture} alt='A picture of me' className='picture' />

    </div>
  );
}

export default App;
