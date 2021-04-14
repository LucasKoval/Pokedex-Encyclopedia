import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/static/css/globals.css';
import '../public/static/css/app.css';

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
