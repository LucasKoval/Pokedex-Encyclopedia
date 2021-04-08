import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex Challenge</title>
        <link rel="icon" href="/static/icons/pokeball-2.png" />
        <html lang="en" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
      </Head>

      <Layout>
        <h1 className="title">Home</h1>
      
        <h3>
          <Link href="/detail">
            <a>To detail</a>
          </Link>
        </h3>
      </Layout>
      
      

    </div>
  )
}
