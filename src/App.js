import './App.css';
import { useRef, useState, useEffect } from 'react';
import { Input } from "./components/Input/Input";
import { MiniCard } from "./components/MiniCard/MiniCard";



function App() {
  const [character, setCharacter] = useState([]);
  const [filtro, setFiltro] = useState('');
  const TextInput = useRef();
  
  const datosFiltrados = character.filter((item) => item.name.toLowerCase().includes(filtro))
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      const { results } = data;

      setCharacter(results);
      console.log(data);
      TextInput.current.focus()
    }
    fetchAPI()
  }, []);

  const handleFilter = (e) => {
    setFiltro(e.target.value);
  };
  
  return (


    <div className="App" >
        
      
      {/* NAVBAR-----OPEN */}
      <div className='navbar-container'>
        <a>
          <h2 className='logo'>LOGO</h2>
        </a>

        <div className='pages-container'>
          
          <a>
            <h2>User</h2>
          </a>

          <a>
            <h2>Login</h2>
          </a>
                      
        </div>

      </div>

      {/* NAVBAR----CLOSE */}

      
      <header className="App-header">
        
        
        <h1 className='Title'>RICK & MORTY CHARACTERS</h1>


        <Input
          data-testid="Buscar..."
          onChange={handleFilter}
          placeholder="Buscar..."
          className='input-search'
        />

        <div className="grid-container">
          {datosFiltrados.map((item, i) => (
            <MiniCard key={item.id} item={item}/>
          ))}
        </div>


      </header>

    </div>



  );
}

export default App;

