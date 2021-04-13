import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { POKEMON_IMAGE_URL } from '../config/baseURL';
import Header from '../components/Header';
import Pagination from '../components/Pagination'
import DetailCard from '../components/DetailCard'
import searchPokemon from '../utils/searchPokemon';
import {useRouter} from 'next/router'

export default function detail({pokemon}) {
    const router = useRouter();
    const {id} = router.query;
    const [poke, setPoke] = useState(pokemon);
    const [loading, setLoading] = useState(false);

    const getPokemon = async (query) => {
        setLoading(true);
        if (query != '') {
            const response = await searchPokemon(query.toLowerCase());
            setPoke(response.data);
            router.query.id = response.data.id
        }
        setLoading(false);
    }

    useEffect( async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemon = await response.json();
            const image = `${POKEMON_IMAGE_URL}${id}.png`;
            pokemon.image = image;
            setPoke(pokemon)
        } catch (err) {
            console.error(`Error fetching the API: ${err}`);
            throw err;
        }
    }, [id])

    return (
        <div>
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

                <div className="d-flex justify-content-center">
                    {
                    <DetailCard
                        id={poke.id}
                        name={poke.name}
                        image={`${POKEMON_IMAGE_URL}${poke.id}.png`}
                        height={poke.height * 10}
                        weight={poke.weight / 10}
                        type={poke.types}
                        ability={poke.abilities[0].ability.name}
                    />
                    }              
                </div>

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