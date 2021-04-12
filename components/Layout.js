import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children }) => {
    return (
        <div className="bg-chillyellow">

            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/static/icons/pokeball-2.png" />
                <html lang="en" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>

            <Header />

            <main>
                {children}
            </main>

            <Footer />
            
        </div>
    );
}

export default Layout;