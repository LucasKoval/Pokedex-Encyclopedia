import React, { useState } from 'react';
import { BASE_API_URL, POKEMON_IMAGE_URL, query } from '../config/baseURL';
import searchPokemon from '../utils/searchPokemon';
import Layout from '../components/Layout';
import Card from '../components/Card'

export default function Home({pokemons}) {
  const [pokemonFound, setPokemonFound] = useState();
  const [loadingSearch, setLoadingSearch] = useState(false);
  const getPokemon = async (query) => {
    setLoadingSearch(true);
    const response = await searchPokemon(query);
    setPokemonFound(response.data);
    setLoadingSearch(false);
  }
  
  return (
    <Layout title="Pokedex Challenge">

      <h1 className="title text-center align-self-center">
        <img src="https://fontmeme.com/permalink/210408/cb4df7d3269ce2ac42c1a819824138d4.png" alt="Home" border="0"/ >
      </h1>

      <div className="d-flex flex-wrap justify-content-evenly mt-4" id="list">
        {
          (!loadingSearch && pokemonFound) ? (
            <Card name={pokemon.name} image={pokemon.image} detail={pokemon.url} id={pokemon.id} />
          ) : (
            pokemons.map((pokemon, index) => {
              return (
                <Card key={index} name={pokemon.name} image={pokemon.image} detail={pokemon.url} id={pokemon.id} />
              )
            })
          )
        }
      </div>

    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const response = await fetch(`${BASE_API_URL}${query.pokemon}${query.all}`);
    const { results } = await response.json();
    const pokemons = results.map((pokemon, index) => {
      const id = index+1;
      const image = `${POKEMON_IMAGE_URL}${id}.png`;
      return {
        id,
        ...pokemon,
        image,
      };
    }) 
    return {
      props: { pokemons }
    }
  } catch (err) {
    console.error(err);
  }
}