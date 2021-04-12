import React, { useState } from 'react';
import { BASE_API_URL, POKEMON_IMAGE_URL, query } from '../config/baseURL';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Card from '../components/Card'
import searchPokemon from '../utils/searchPokemon';

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
    <div>
      <Head>
          <title className="text-capitalize">Pokedex Challenge | HOME</title>
          <link rel="icon" href="/static/icons/pokeball-2.png" />
          <html lang="en" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
          <link href="/static/css/app.css" rel="stylesheet" />
      </Head>

      <Header getPokemon={getPokemon} />

      <Layout>

        <h1 className="title text-center align-self-center">
          <img src="https://fontmeme.com/permalink/210408/cb4df7d3269ce2ac42c1a819824138d4.png" alt="Home" border="0"/ >
        </h1>

        <div className="d-flex flex-wrap justify-content-evenly mt-4" id="list">
          {
            (!loadingSearch && pokemonFound) ? (
              <div className="d-flex w-100 justify-content-center">
                <Card name={pokemonFound.name} image={`${POKEMON_IMAGE_URL}${pokemonFound.id}.png`} detail={pokemonFound.url} id={pokemonFound.id} />
              </div>
            ) : ( null )        
          }
          {
            pokemons.map((pokemon, index) => {
              return (
                <Card key={index} name={pokemon.name} image={pokemon.image} detail={pokemon.url} id={pokemon.id} />
              )
            })
          }

        </div>

      </Layout>
    </div>
    
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