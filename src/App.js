import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ulises Muñoz</p>
        <h1>Contador: {counter}</h1>
        <button onClick={() => setCounter(counter+1)}>Sumar</button>
        <button onClick={() => setCounter(counter - counter)}>Reset</button>
        <button onClick={() => setCounter(counter-1) }>Restar</button>


      </header>

        



    </div>



  );
}

export default App;
