import React from 'react';
import Head from 'next/head';
import CookieModal from '../components/presentation/CookieModal';
import LazyLoadImage from '../components/presentation/LazyLoadImage';
import styles from './pages.module.scss';

const WhatIsBot = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Botter Spotter - What is a Bot?</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content="A bot is a computer program that facilitates posting content on social media" />
                <meta property="og:title" content="What is a Bot?" key="sitetitle" />
                <meta property="og:description" content="A bot is a computer program that facilitates posting content on social media" key="sitedescription" />
                <meta property="og:url" content="https://botterspotter.com/what-is-a-bot" key="siteurl" />
                <meta property="og:image" content="https://botterspotter.com/images/android.png" key="siteimage" />
            </Head>
            <article className={styles.root}>
                <section className={styles.headContent}>
                    <LazyLoadImage src="/images/android.png" />
                    <h1>What is a Bot?</h1>
                    <div className={styles.preface}>
                        <p>A bot is simply a computer program that facilitates posting content on social media. However, it is important to consider the source and purpose of the bot.</p>
                    </div>
                </section>
                <section className={styles.mainContent}>
                    <h3>Good Bots</h3>
                    <p>Bots can perform meaningful tasks, and are often "good," or at least not particularly bad. For instance, many companies use bots to post content and keep track of their social media presence. In fact, there is a major industry dedicated to facilitating these needs. You may have heard of some of the major players such as <em>Mailchimp</em>, <em>Hootsuite</em>, <em>HubSpot</em>, and <em>Buffer</em>. Twitter also provides a robust <a href="https://developer.twitter.com/" target="_blank" rel="noopener noreferrer">toolset</a> for developers to use in constructing bots.</p>
                    <p>There are also bots designed to auto publish news stories or emergency information from government agencies. And then there are the "fun" bots that are developed for pure entertainment value, such as responding to specific tweets with images, memes, or quaint sayings.</p>
                    <h3>Bad Bots</h3>
                    <p>Botter Spotter attempts to only flag bots that are objectively malicious. This entails bots that were developed for no other purpose than to harrass or post false news. This type of bot is also used to enhance the influence of a person or organization by artificially inflating their number of followers.</p>
                    <p>There is also an industry dedicated to furnishing this type of "bad" bot. Anyone can purchase followers or bots that spam messages to help make them trend. <a href="https://link.springer.com/chapter/10.1007%2F978-981-10-2738-3_39" target="_blank" rel="noopener noreferrer">Published studies</a> have found that bots account for up to 15% of tweets. Bots of this type are in direct violation of Twitter's <a href="https://help.twitter.com/rules-and-policies/platform-manipulation" target="_blank" rel="noopener noreferrer">terms of service</a>, and should be <a href="https://help.twitter.com/rules-and-policies/twitter-report-violation" target="_blank" rel="noopener noreferrer">reported</a> when encountered.</p>
                    <p>It is sometimes easy to forget that bots are controlled and maintained by real people. In some cases, a bot may respond to you. A response does not mean the account is not a bot. It merely indicates that the person monitoring the bot happened to notice your tweet. However, in most cases, bots rarely respond to challenges.</p>
                    <p>In some cases, Botter Spotter may flag an account that is not actually a bot. Usually this is intentional, since in addition to flagging bots, we also look for and flag accounts that have a history of implementing or following bots.</p>
                </section>
            </article>
            <CookieModal />
        </React.Fragment>
    )
};

export default WhatIsBot;
