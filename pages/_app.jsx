import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { wrapper } from '../store';
import { BreakpointProvider } from '../components/presentation/BreakpointProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/main.scss';
import styles from './app.module.scss';

function App(props) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Botter Spotter - Find Twitter Bots and Trolls</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="description" content="Enter a Twitter username and get their bot score and a brief summary." />
                <meta name="keywords" content="twitter, bot, troll, search, find, score" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@botterspotter" />
                <meta property="og:site_name" content="Botter Spotter" key="sitename" />
                <meta property="og:title" content="Find Twitter Bots and Trolls" key="sitetitle" />
                <meta property="og:description" content="Enter a Twitter username and get their bot score and a brief summary." key="sitedescription" />
                <meta property="og:url" content="https://botterspotter.com/" key="siteurl" />
                <meta property="og:image" content={`https://botterspotter.com/images/score-.png`} key="siteimage" />
            </Head>
            <BreakpointProvider>
                <div className={styles.root}>
                    <div>
                        <Header />
                        <Component {...pageProps} />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </BreakpointProvider>
        </React.Fragment>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(App);
