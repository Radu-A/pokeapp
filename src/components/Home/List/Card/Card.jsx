import React from "react";

const Card = ({pokemon}) => {

  console.log(pokemon)
  if (pokemon) {
    return (
      <>
        <article className="card-article">
          <div className="card-title">
            <h3>{pokemon.name}</h3>
          </div>
          <div className="card-image">
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
          </div>
          <table>
            <tr>
              <th>B.Exp.</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
            <tr>
              <td align="center">{pokemon.base_experience}</td>
              <td align="center">{pokemon.height}</td>
              <td align="center">{pokemon.weight}</td>
            </tr>
          </table>
        </article>
      </>
    );
  }
};

export default Card;
