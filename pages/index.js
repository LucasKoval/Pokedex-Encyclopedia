import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import getAllPokemons from '../utils/getAllPokemons'
import Header from '../components/Header';
import Layout from '../components/Layout';
import Card from '../components/Card'

export default function Home({pokemons}) {
  const [searchResults, setSearchResults] = useState();
  const [loadingSearch, setLoadingSearch] = useState(false);
  
  const searchPokemon = async (query) => {
    setLoadingSearch(true);
    if (query == '') {
      setSearchResults(pokemons)
    } else {
      const filter = await pokemons.filter(pokemon => {
        return pokemon.name.includes(query.toLowerCase())
      })
      setSearchResults(filter)
    }
    setLoadingSearch(false);
  }

  const cleanFilter = () => {
    setLoadingSearch(true);
    setSearchResults(pokemons)
    setLoadingSearch(false);
  }
  
  return (
    <div>
      <Header searchPokemon={searchPokemon} />

      <Layout>

        <h1 className="title text-center align-self-center">
          <img src="https://fontmeme.com/permalink/210408/cb4df7d3269ce2ac42c1a819824138d4.png" alt="Home" border="0"/ >
        </h1>

        <div className="d-flex justify-content-center pt-4 pb-2">
          <Button block onClick={(e) => cleanFilter()} className="btn poke-button text-dark fw-bold">Clean Filter</Button>
        </div>

        <div className="d-flex flex-wrap justify-content-evenly mt-4" id="list">
          {
            (!loadingSearch && searchResults) ? (
              searchResults.map((pokemon, index) => {
                return (
                  <div className="d-flex pb-5 justify-content-between">
                    <Card key={index} name={pokemon.name} image={pokemon.image} detail={pokemon.url} id={pokemon.id} />
                  </div>
                )
              })
            ) : (
              pokemons.map((pokemon, index) => {
                return (
                  <Card key={index} id={pokemon.id} number={pokemon.number} name={pokemon.name} image={pokemon.image} detail={pokemon.url} />
                )
              })
            )        
          }

        </div>

      </Layout>
    </div>
    
  )
}

export async function getStaticProps(context) {
  return getAllPokemons();
}