import React, { useEffect, useState } from "react";

const Card = ({pokemon}) => {
  
  const [url, setUrl] = useState('');

  useEffect(()=> {
    
    if (window.location.href === 'http://localhost:5173/') {
      setUrl(`http://localhost:5173/details?name=${pokemon.name}`);
    } else {
      setUrl(`https://mellow-elf-6a6bb5.netlify.app/details?name=${pokemon.name}`);
    }

  }, [])

  if (pokemon) {

    console.log(window.location.href);

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
