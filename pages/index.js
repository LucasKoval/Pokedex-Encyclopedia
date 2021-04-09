import React from 'react';
import Head from 'next/head';
import { 
  BASE_API_POKEMON,
  BASE_API_PRODUCTS_IMAGE
} from '../pages/api/baseURL';
import useFetch from '../pages/api/useFetch';
import Loader from '../assets/Loader';
import Layout from '../components/Layout'
import Card from '../components/Card'
import Pagination from '../assets/Pagination'


export default function Home() {
  const { data, loading, error } = useFetch(BASE_API_POKEMON, []); /* +'?limit=151' */
  if (loading) return <Loader />;
  if (error) return "Error!";
  const pokemons = data.results;

  return (
    <div className="bg-chillyellow">
      
      <Head>
        <title>Pokedex Challenge</title>
        <link rel="icon" href="/static/icons/pokeball-2.png" />
        <html lang="en" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
      </Head>

      <Layout>

        <Pagination>
          <h1 className="title text-center mb-4">
            <img src="https://fontmeme.com/permalink/210408/cb4df7d3269ce2ac42c1a819824138d4.png" alt="Home" border="0"/ >
          </h1>
        </Pagination>

        <div className="d-flex flex-wrap justify-content-evenly" id="list">
          { 
            pokemons.map((pokemon, index) => {
              return (
                <Card key={index} name={ pokemon.name } image={`${BASE_API_PRODUCTS_IMAGE}${index+1}.png`} detail={ pokemon.url } id={ index+1 } />
              )
            })
          }
        </div>

        <Pagination />

      </Layout>

    </div>
  )
}