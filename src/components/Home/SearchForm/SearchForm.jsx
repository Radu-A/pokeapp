import React from "react";
import { useState, useEffect, useContext } from "react";
import { ListContext } from "../../../context/listContext";

const SearchForm = () => {

  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { pokeList, updatePokeList } = useContext(ListContext);

  // Trying to use localstorage
  useEffect(() => {
    if (localStorage.pokeList) {
      const loadData = async()=> {
        console.log(JSON.parse(localStorage.pokeList));
        const [localData] = await JSON.parse(localStorage.pokeList)
        updatePokeList(localData);
      }
      loadData();
    }
  }, [])

  useEffect(() => {

    const getPokemon = async () => {
      try {
        if (name.length > 0) {
          const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data =await resp.json();
          const newPokemon = {
            id: data.id,
            name: data.name,
            url: data.sprites.other["official-artwork"].front_default,
            base_experience: data.base_experience,
            typeOne: data.types[0].type.name,
            typeTwo: data.types[1] ? data.types[1].type.name : 'x'
          }
          updatePokeList(newPokemon);
          // Localstorage
          localStorage.setItem("pokeList", JSON.stringify(pokeList));
        }
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon();
  },[name])
  
  const handleSubmit = (event)=> {
    event.preventDefault();
    const searchName = event.target.name.value.toLowerCase()
    setName(searchName);
    setInputValue('');
  }

  const handleChange = (event)=> {
    event.preventDefault();
    setInputValue(event.target.value);
    if (inputValue !== '') {
      setTimeout(() => {
        const searchName = event.target.value.toLowerCase()
        setName(searchName);
        setInputValue('');
      }, 3000);
    }
  }

  return (
    <>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={inputValue} placeholder="Name" onChange={handleChange}/>
          <button type="submit">Search</button>
        </form>
      </section>
    </>
  );
};

export default SearchForm;
