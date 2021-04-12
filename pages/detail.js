import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { POKEMON_IMAGE_URL } from '../config/baseURL';
import Header from '../components/Header';
import Pagination from '../components/Pagination'
import DetailCard from '../components/DetailCard'
import searchPokemon from '../utils/searchPokemon';

export default function detail({pokemon}) {
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
                <title className="text-capitalize">Detail</title>
                <link rel="icon" href="/static/icons/pokeball-2.png" />
                <html lang="en" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>

            <Header getPokemon={getPokemon} />

            <Layout title={`Detail: ${pokemon.name}`}>

                <Pagination>
                    <h1 className="title text-center align-self-center">
                        <img src="https://fontmeme.com/permalink/210408/7c0325945d8350a0ed0187b3db446e0b.png" alt="Detail" border="0" />
                    </h1>
                </Pagination>

                <div className="d-flex justify-content-center mb-3">
                    <Link href="/">
                        <a className="nav-link">
                            <button className="btn poke-button fw-bold">Return</button> 
                        </a>
                    </Link>                  
                </div>

                {
                    (!loadingSearch && pokemonFound) ? (
                        <div className="d-flex justify-content-center">
                            <DetailCard
                                id={pokemonFound.id}
                                name={pokemonFound.name}
                                image={`${POKEMON_IMAGE_URL}${pokemonFound.id}.png`}
                                height={pokemonFound.height * 10}
                                weight={pokemonFound.weight / 10}
                                type={pokemonFound.types}
                                ability={pokemonFound.abilities[0].ability.name}
                            />                    
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <DetailCard
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.image}
                                height={pokemon.height * 10}
                                weight={pokemon.weight / 10}
                                type={pokemon.types}
                                ability={pokemon.abilities[0].ability.name}
                            />                    
                        </div>
                    )
                }
                
            </Layout>
        </div>
        
    )
}

export async function getServerSideProps({query}) {
    const id = query.id;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await response.json();
        const image = `${POKEMON_IMAGE_URL}${id}.png`;
        pokemon.image = image;
        return {
            props: { pokemon },
        }
    } catch (err) {
        console.error(`Error fetching the API: ${err}`);
        throw err;
    }
}