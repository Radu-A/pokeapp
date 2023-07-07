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
            <img src={pokemon.url} alt="" />
          </div>
          <table>
            <thead>
              <tr>
                <th>B.Exp.</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="center">{pokemon.base_experience}</td>
                <td align="center">{pokemon.height}</td>
                <td align="center">{pokemon.weight}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </>
    );
  }
};

export default Card;
