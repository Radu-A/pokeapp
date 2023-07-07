import React, { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card/Card";
import { ListContext } from "../../../context/listContext";

const List = () => {

  const { pokeList, updatePokeList } = useContext(ListContext);

  return (
    <>
      <section className="list-section">
        {pokeList.length > 0 ? pokeList.map(pokemon=>{
          return <Card pokemon={pokemon} key={uuidv4()}/>
        }) : <p>Enter the name of a pokemon</p>
        }
      </section>
    </>
  );
};

export default List;
