import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card/Card";

const List = ({list}) => {

  return (
    <>
      <section className="list-section">
        {list.length > 0 ? list.map(pokemon=>{
          return <Card pokemon={pokemon} key={uuidv4()}/>
        }) : <p>Enter the name of a pokemon</p>
        }
      </section>
    </>
  );
};

export default List;