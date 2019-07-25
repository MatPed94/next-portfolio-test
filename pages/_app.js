import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../static/css/style.css';

const Layout = (props) => {
 const { children } = props;
 const router = useRouter();
 
  return (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </Head>
        <Navbar route={router.pathname}/>
        { children }
        <Footer />
    </div>
      );
  }
  
export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}