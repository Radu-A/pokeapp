import React from "react";
import { useState, useEffect } from "react";

const Search = ({list, setList}) => {

  const [name, setName] = useState('');

  
  useEffect(() => {

    const getPokemon = async () => {
      console.log(name)
      try {
        if (name.length > 0) {
          const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data =await resp.json();
          setList([...list, data])
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
  }

  return (
    <>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="" placeholder="Name"/>
          <button type="submit">Search</button>
        </form>
      </section>
    </>
  );
};

export default Search;
