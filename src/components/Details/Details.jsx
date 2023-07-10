import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Chart from "./Chart/Chart";
import Title from "./Title/Title";

const Details = () => {

  const [pokemon, setPokemon] = useState({});
  const [chartData, setChartData] = useState([]);

  const location = useLocation();

  useEffect(()=>{

    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get('name');
    if (singleValue) {
      const getPokemon = async () => {
        try {
          const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${singleValue}`);
          const data = await resp.json();
          const newPokemon = {
            id: data.id,
            name: data.name,
            url: data.sprites.other["official-artwork"].front_default,
            base_experience: data.base_experience,
            height: data.height,
            weight: data.weight,
            moveOne: data.moves[0].move.name,
            moveTwo: data.moves[1].move.name,
            typeOne: data.types[0].type.name,
            typeTwo: data.types[1] ? data.types[1].type.name : '',
            stats: {
              hp: data.stats[0].base_stat,
              atk: data.stats[1].base_stat,
              def: data.stats[2].base_stat,
              satk: data.stats[3].base_stat,
              sdef: data.stats[4].base_stat,
              spd: data.stats[5].base_stat
            }
          }
          setPokemon(newPokemon);
          const newChartData = [
            {
              name: 'HP',
              uv: newPokemon.stats.hp
            },
            {
              name: 'ATK',
              uv: newPokemon.stats.atk
            },
            {
              name: 'DEF',
              uv: newPokemon.stats.def
            },
            {
              name: 'SATK',
              uv: newPokemon.stats.satk
            },
            {
              name: 'SDEF',
              uv: newPokemon.stats.sdef
            },
            {
              name: 'SPD',
              uv: newPokemon.stats.spd
            }
          ];
          setChartData(newChartData);
        } catch (error) {
          console.log(error)
        }
      }
      getPokemon()
    } else {
      console.log('algo va mal con la URL')
    }

    
  }, [])

  return (
    <>
      <section className="details-section">
        {pokemon.name && (
            <>
            <Title pokemon={pokemon}/>
            <article className="description-article">
              <div className="image-div">
                <img src={pokemon.url} alt="" />
              </div>
              <div className="info-div">
                <div className="things-div">
                  <div>
                    <h3>Height</h3>
                    <p>{pokemon.height}0 cm</p>
                  </div>
                  <div>
                    <h3>Weight</h3>
                    <p>{pokemon.weight} kg</p>
                  </div>
                  <div>
                    <h3>Moves</h3>
                    <p>{pokemon.moveOne}</p>
                    <p>{pokemon.moveTwo}</p>
                  </div>
                </div>
                <Chart chartData={chartData}/>
              </div>
            </article>
            </>
        )}

      </section>
    </>
  );
};

export default Details;
