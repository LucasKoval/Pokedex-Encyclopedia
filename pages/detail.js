import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/Layout'
import DetailCard from '../components/DetailCard'
import Pagination from '../assets/Pagination'


export default function Detail() {
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
                    <h1 className="title text-center mb-3">
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
                    <DetailCard />                      
                </div>

            </Layout>

        </div>
    ) 
}
