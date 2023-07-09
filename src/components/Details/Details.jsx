import React, { useEffect, useState } from "react";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#2a73b9', '#00C49F', '#ffcb05', '#FF8042', '#ec3434', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};



const Details = () => {

  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [chartData, setChartData] = useState([]);

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
          height: data.height,
          weight: data.weight,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1] ? data.types[1].type.name : 'x',
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
  }, [])

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  

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
            <article className="description-article">
              <div className="image-div">
                <img src={pokemon.url} alt="" />
              </div>
              <div className="info-div">
                <p>{pokemon.stats.hp}</p>
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
