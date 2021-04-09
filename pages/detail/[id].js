import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
    BASE_API_POKEMON,
    BASE_API_PRODUCTS_IMAGE
} from '../../config/baseURL';
import Loader from '../../components/Loader';
import Layout from '../../components/Layout'
import DetailCard from '../../components/DetailCard'
import Pagination from '../../components/Pagination'
import useFetchAll from '../../hooks/useFetchAll';


export default function Detail(props) {
    const router = useRouter()
    const id = router.query.id
    const { data, pokemons, loading, error, page, previousPage, nextPage } = useFetchAll(BASE_API_POKEMON, []);
    if (loading) return <Loader />;
    if (error) return "Error!";

    const pokemon = pokemons.filter(pokemon => {
        return pokemon.url == `https://pokeapi.co/api/v2/pokemon/${id}/`
    })

    return (
        <div className="bg-chillyellow">
            <Head>
                <title>Pokedex Challenge</title>
                <link rel="icon" href="/static/icons/pokeball-2.png" />
                <html lang="en" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>
            
            <Layout>

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
                    <DetailCard url={ pokemon[0].url }/>                      
                </div>

            </Layout>

        </div>
    ) 
}
