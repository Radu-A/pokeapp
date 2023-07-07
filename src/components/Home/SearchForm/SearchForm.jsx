import React from "react";
import { useState, useEffect, useContext } from "react";
import { ListContext } from "../../../context/listContext";

const SearchForm = () => {

  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { pokeList, updatePokeList } = useContext(ListContext);

  useEffect(() => {

    const getPokemon = async () => {
      try {
        if (name.length > 0) {
          const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data =await resp.json();
          updatePokeList(data)
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
