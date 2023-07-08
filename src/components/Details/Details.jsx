import React, { useEffect, useState } from "react";

const Details = () => {

  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState({})

  useEffect(()=>{
    const getPokemon = async () => {
      try {
        console.log('haces fetch')
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/charizard`);
        const data = await resp.json();
        const newPokemon = {
          id: data.id,
          name: data.name,
          url: data.sprites.other["official-artwork"].front_default,
          base_experience: data.base_experience,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1] ? data.types[1].type.name : 'x'
        }
        setPokemon(newPokemon);
        console.log(pokemon);
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon()
  }, [])

  return (
    <>
      <section className="detail-section">
        {pokemon.name && (
            <>
            <article className="title-article">
              <h1>{pokemon.name.toUpperCase()}</h1>
              <div className="type-div">
                <h3>{pokemon.typeOne}</h3>
                {pokemon.typeTwo && <h3>{pokemon.typeTwo}</h3>}
              </div>
            </article>
            <article className="image-article">
              <img src={pokemon.url} alt="" />
            </article>
            <article className="info-article">

            </article>
            </>
        )}

      </section>
    </>
  );
};

export default Details;
