import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({pokemon}) => {

  const url = `/details?name=${pokemon.name}`

  if (pokemon) {

    console.log(window.location.href);

    return (
      <>
        <article className="card-article">
          <div className="card-title">
            <h3><Link className="nav-link" to={url}>{pokemon.name}</Link></h3>
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
