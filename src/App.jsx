import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ListContext } from './context/listContext';
// import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  const [pokeList, setPokeList] = useState([])

  const updatePokeList = (newPokemon)=> {
    setPokeList([...pokeList, newPokemon])
  }
  const listData = {
    pokeList,
    updatePokeList
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <ListContext.Provider value={listData}>
          <Main />  
        </ListContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
