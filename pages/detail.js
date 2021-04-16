import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import DetailCard from '../components/DetailCard';
import getPokemon from '../utils/getPokemon';

export default function detail({ pokemon }) {
    return (
        <div>
            <Header/>
            <Layout>
                <h1 className="title text-center align-self-center mb-0">
                    <img src="https://fontmeme.com/permalink/210408/7c0325945d8350a0ed0187b3db446e0b.png" alt="Detail" border="0"/>
                </h1>
                 <Pagination> 
                    <div className="d-flex align-items-center justify-content-center">
                        <Link href="/">
                            <a className="nav-link p-0 mb-0">
                                <button className="btn poke-button fw-bold">Return</button> 
                            </a>
                        </Link>                  
                    </div>
                </Pagination>
                <div className="d-flex justify-content-center pb-1">
                    {<DetailCard
                        id={pokemon.id}
                        number={pokemon.number}
                        name={pokemon.name}
                        image={pokemon.image}
                        height={pokemon.height * 10}
                        weight={pokemon.weight / 10}
                        types={pokemon.types}
                        abilities={pokemon.abilities}
                    />}            
                </div>
            </Layout>
        </div>
    )
}

export async function getServerSideProps({query}){
    return getPokemon(query);
}