import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Card from '../components/Card';
import getAllPokemons from '../utils/getAllPokemons';

export default function Home({pokemons}) {
  const [searchResults, setSearchResults] = useState(pokemons);
  const [filterResults, setFilterResults] = useState(true);
  
  const searchPokemon = (e) =>{
    const filter = pokemons.filter( pokemon => pokemon.name.includes(e.target.value.toLowerCase()));
    setFilterResults(filter.length == 0 ? false : true);
    setSearchResults(filter);
  }

  const cleanFilter = () => {
    setSearchResults(pokemons);
  }
  
  return (
    <div>
      <Header searchPokemon={searchPokemon}/>
      <Layout>
        <h1 className="title text-center align-self-center">
          <img src="https://fontmeme.com/permalink/210408/cb4df7d3269ce2ac42c1a819824138d4.png" alt="Home" border="0"/>
        </h1>
        <div className="d-flex justify-content-center pt-4 pb-2">
          <Form className="d-inline-flex align-items-center">
            <Form.Control onChange={searchPokemon} placeholder="Search Pokemon"/>         
          </Form>
          <Button block onClick={cleanFilter} className="btn poke-button text-dark fw-bold">Clean Filter</Button>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly mt-4" id="list">
          {searchResults.map((pokemon, index) => {
            return (
              <div key={index} className="d-flex pb-5 justify-content-between">
                <Card key={index} id={pokemon.id} number={pokemon.number} name={pokemon.name} image={pokemon.image} detail={pokemon.url}/>
              </div>
            )
          })}      
        </div>
        <div className={filterResults ? 'd-none' : 'not-found'}>
          <h2 className='meme-font'>VAMO A CALMARNO Y BUSCA DE NUEVO...</h2>
          <img src='/static/img/notFound.png'></img>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  return getAllPokemons();
}