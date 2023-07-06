import React from "react";

const Card = ({pokemon}) => {

  console.log(pokemon)
  if (pokemon) {
    return (
      <>
        <article className="card-name">
          <div className="card-title">
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.id}</h3>
          </div>
          <div className="card-image">
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
          </div>
          <div className="card-info">
            <p>{pokemon.base_experience}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.weight}</p>
          </div>
        </article>
      </>
    );
  }
};

export default Card;
