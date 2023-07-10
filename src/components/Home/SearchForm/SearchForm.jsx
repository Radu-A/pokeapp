import React from "react";
import { useState, useEffect, useContext } from "react";
import { ListContext } from "../../../context/listContext";

import SearchInput from "./SearchInput/SearchInput";

const SearchForm = () => {

  const [name, setName] = useState('');
  const { pokeList, updatePokeList } = useContext(ListContext);

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
        }
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon();
  },[name])

  return (
    <>
      <section className="form-section">
        <SearchInput setName={setName} />
      </section>
    </>
  );
};

export default SearchForm;
