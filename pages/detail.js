import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Carousel } from 'react-bootstrap'

export default function Detail() {
    return (
        <div>
            <Head>
                <title>Pokedex Challenge</title>
                <link rel="icon" href="/static/icons/pokeball-2.png" />
                <html lang="en" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>
            
            <Layout>
                <h1>Detail</h1>

                <h3>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </h3>

                <Carousel>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img className="d-flex w-25 justify-content-center" src="/static/img/001.png" alt="First slide" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>   
                        </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img className="d-flex w-25 justify-content-center" src="/static/img/002.png" alt="First slide" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>   
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img className="d-flex w-25 justify-content-center" src="/static/img/003.png" alt="First slide" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>   
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Layout>

        </div>
    ) 
}
