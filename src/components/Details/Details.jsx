import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// Recharts
const colors = ['#2a73b9', '#00C49F', '#ffcb05', '#FF8042', '#ec3434', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

// Type colors
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

const Details = () => {

  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [chartData, setChartData] = useState([]);

  const [params, setParams] = useState(null);
  const location = useLocation();

  useEffect(()=>{

    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get('name');
    if (singleValue) {
      const getPokemon = async () => {
        try {
          console.log('haces fetch')
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
          console.log(pokemon);
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

  // Rechart

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  const typeOneClass = `type-div ${pokemon.typeOne}`;
  const typeTwoClass = `type-div ${pokemon.typeTwo}`;

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
    <>
      <section className="details-section">
        {pokemon.name && (
            <>
            <article className="title-article">
              <h1>{pokemon.name.toUpperCase()}</h1>
              <div className="types-div">
                <div className="type-div" style={{"background-color": colours[pokemon.typeOne]}}>
                  <h3>{pokemon.typeOne}</h3>
                </div>
                  {pokemon.typeTwo && <div className="type-div" style={{"background-color": colours[pokemon.typeTwo]}}><h3>{pokemon.typeTwo}</h3></div>}
              </div>
            </article>
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
                <BarChart
                  width={400}
                  height={250}
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                  </Bar>
                </BarChart>
              </div>
            </article>
            </>
        )}

      </section>
    </>
  );
};

export default Details;
