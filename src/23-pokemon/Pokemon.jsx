const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
import { useState, useEffect } from 'react';

function Pokemon(props) {


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.results);
            // console.log('adentro del useEffect');
            setData(data.results);
        });
        }, []);  

  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonInfo, setPokemonInfo] = useState({
      name: 'pikachu',
      id: 25,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
  });


  
    

  function handleChange(e) {
    setPokemon(e.target.value);
    // console.log(e.target);
    let filteredArray = data.filter(el => el.name === e.target.value);
    console.log(filteredArray);
    if (filteredArray.length > 0) {
      
      let pokemonUrl = filteredArray[0].url;
      fetch(pokemonUrl)
        .then(res => res.json())
        .then(data => {
          let newPokemonInfo = {
            name: data.name,
            id: data.id,
            img: data.sprites.other.dream_world.front_default
          };

          setPokemonInfo(newPokemonInfo);
        });
      
    }

      
  }

  return (
    <>
      <input
        onChange={handleChange} 
        value={pokemon} 
        type="text"  
      />
      <div className="pokemon-card">
      
      <h1>{pokemonInfo.name}</h1>
      <p>id: {pokemonInfo.id}</p>
      <img src={pokemonInfo.img} />  
    </div>
    </>
    
  ); 
}

export default Pokemon;