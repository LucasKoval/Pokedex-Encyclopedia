import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { POKEMON_IMAGE_URL } from '../config/baseURL';
import Pagination from '../components/Pagination'
import DetailCard from '../components/DetailCard'

export default function detail({pokemon}) {
    return (
        <Layout title='Detalle'>

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
                <DetailCard
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    height={pokemon.height * 10}
                    weight={pokemon.weight / 10}
                    type={pokemon.types[0].type.name}
                    ability={pokemon.abilities[0].ability.name}
                />                    
            </div>

        </Layout>
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