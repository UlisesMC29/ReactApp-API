import './App.css';
import { useRef, useState, useEffect } from 'react';
import { Input } from "./components/Input";
import { MiniCard } from "./components/MiniCard";



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
      <header className="App-header">
        
        <nav className='nav-bar'>
          <a href='' className='Logo'>Logo</a>
          <ul className='nav-menu'>
            <li className='nav-menu-item'> <a href='' className=''></a> </li>
            <li className='nav-menu-item'> <a href='' className=''></a> </li>
            <li className='nav-menu-item'> <a href='' className=''></a> </li>
            <li className='nav-menu-item'> <a href='' className=''></a> </li>
          </ul> 
        </nav>
        
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

