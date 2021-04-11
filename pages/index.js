import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { POKEMON_IMAGE_URL } from '../config/baseURL';
import useFetchAll from '../hooks/useFetchAll';
import searchPokemon from '../utils/searchPokemon';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Card from '../components/Card'

export default function Home() {
  const [pokemonFound, setPokemonFound] = useState();
  const [loadingSearch, setLoadingSearch] = useState(false);
  const { pokemons, loading, error } = useFetchAll();
  if (loading) return <Loader />;
  if (error) return "Error!";

  const getPokemon = async (query) => {
    setLoadingSearch(true);
    const response = await searchPokemon(query);
    setPokemonFound(response.data);
    setLoadingSearch(false);
  }
  
  return (
    <div className="bg-chillyellow">
      
      <Head>
        <title>Pokedex Challenge</title>
        <link rel="icon" href="/static/icons/pokeball-2.png" />
        <html lang="en" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
      </Head>

      <Header getPokemon={getPokemon} />
      
      <main>

        <h1 className="title text-center align-self-center">
          <img src="https://fontmeme.com/permalink/210408/cb4df7d3269ce2ac42c1a819824138d4.png" alt="Home" border="0"/ >
        </h1>

        <div className="d-flex flex-wrap justify-content-evenly mt-4" id="list">
          
          {
            (!loadingSearch && pokemonFound) ? (
              <Card key={index} name={ pokemonFound.name } image={`${ POKEMON_IMAGE_URL }${ pokemonFound.id }.png`} detail={ `https://pokeapi.co/api/v2/pokemon/${pokemonFound.id}` } id={ pokemonFound.id } />
            ) : (
              pokemons.map((pokemon, index) => {
                return (
                  <Card key={index} name={ pokemon.name } image={`${ POKEMON_IMAGE_URL }${ index+1 }.png`} detail={ pokemon.url } id={ index+1 } />
                )
              })
            )
          }

        </div>

      </main>

      <Footer />

    </div>
  )
}