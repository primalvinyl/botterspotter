import React from 'react';
import Head from 'next/head';
import CookieModal from '../components/presentation/CookieModal';
import LazyLoadImage from '../components/presentation/LazyLoadImage';
import styles from './pages.module.scss';

const HowToSpotBot = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Botter Spotter - How to Spot a Bot</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content="It is not too hard to spot a bot once you know what to look for" />
                <meta property="og:title" content="How to Spot a Bot" key="sitetitle" />
                <meta property="og:description" content="It is not too hard to spot a bot once you know what to look for" key="sitedescription" />
                <meta property="og:url" content="https://botterspotter.com/how-to-spot-a-bot" key="siteurl" />
                <meta property="og:image" content="https://botterspotter.com/images/zombies.png" key="siteimage" />
            </Head>
            <article className={styles.root}>
                <section className={styles.headContent}>
                    <LazyLoadImage src="/images/zombies.png" />
                    <h1>How To Spot a Bot</h1>
                    <div className={styles.preface}>
                        <p>It is not hard to spot a bot once you know what to look for.</p>
                        <p>Bots tend to be relatively single-minded. They are usually designed to follow other bots, harass user accounts, and to artificially inflate the number of followers of their owners.</p>
                    </div>
                </section>
                <section className={styles.mainContent}>
                    <p>Below is a list of some of the most common and easily identifiable bot characteristics to watch for. Botter Spotter attempts to analyze and consolidate these characteristics for you. We also consult an active database of known bots and users that implement bots.</p>
                    <ul>
                        <li>Bots typically tweet and retweet much more often than a typical user. Some bots tweet several times per minute. However, also consider the fact that legitimate accounts, such as news outlets, use bots to publish many tweets throughout the day.</li>
                        <li>The screen name can sometimes identify a bot by displaying the telltale signs of being machine generated; for example, if it's much longer than a typical username, it ends in a series of numbers, or is composed of seemingly random alphanumeric characters.</li>
                        <li>Many bots do not have a profile or banner image.</li>
                        <li>A bot's account summary is often composed entirely of keywords and hashtags.</li>
                        <li>Study their recent post history. Many bots retweet only from the same few accounts (which are often themselves bots). They also may repeatedly post the same memes, emojis, or variations of the same inflammatory message or hashtags.</li>
                        <li>Observe the account's number of followers and the number of accounts they follow. Are the numbers disproportionately high?</li>
                    </ul>
                </section>
            </article>
            <CookieModal />
        </React.Fragment>
    )
};

export default HowToSpotBot;
