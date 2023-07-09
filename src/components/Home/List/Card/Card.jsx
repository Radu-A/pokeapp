import React from "react";

const Card = ({pokemon}) => {

  if (pokemon) {

    const url = `http://localhost:5173/details?name=${pokemon.name}`

    return (
      <>
        <article className="card-article">
          <div className="card-title">
            <h3><a href={url}>{pokemon.name}</a></h3>
          </div>
          <div className="card-image">
            <img src={pokemon.url} alt="" />
          </div>
          <table>
            <thead>
              <tr>
                <th>B.Exp.</th>
                <th>Type 1</th>
                <th>Type 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="center">{pokemon.base_experience}</td>
                <td align="center">{pokemon.typeOne}</td>
                <td align="center">{pokemon.typeTwo}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </>
    );
  }
};

export default Card;
