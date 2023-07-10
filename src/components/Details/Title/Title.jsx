import React from "react";

const Title = ({pokemon}) => {

  const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  return (
    <article className="title-article">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <div className="types-div">
        <div className="type-div" style={{"backgroundColor": colours[pokemon.typeOne]}}>
          <h3>{pokemon.typeOne}</h3>
        </div>
          {pokemon.typeTwo && <div className="type-div" style={{"backgroundColor": colours[pokemon.typeTwo]}}><h3>{pokemon.typeTwo}</h3></div>}
      </div>
    </article>
  );
};

export default Title;
