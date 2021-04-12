import React from 'react';
import Head from 'next/head';
import CookieModal from '../components/presentation/CookieModal';
import LazyLoadImage from '../components/presentation/LazyLoadImage';
import styles from './pages.module.scss';

const TwitterRules = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Botter Spotter - Twitter Rules</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content="Twitter's terms of service are expansive, yet it can often seem as if they enforce their rules arbitrarily" />
                <meta property="og:title" content="Twitter Rules" key="sitetitle" />
                <meta property="og:description" content="Twitter's terms of service are expansive, yet it can often seem as if they enforce their rules arbitrarily" key="sitedescription" />
                <meta property="og:url" content="https://botterspotter.com/twitter-rules" key="siteurl" />
                <meta property="og:image" content="https://botterspotter.com/images/hand-of-god.png" key="siteimage" />
            </Head>
            <main>
                <article className={styles.root} aria-labelledby="headline">
                    <section className={styles.headContent}>
                        <LazyLoadImage src="/images/hand-of-god.png" />
                        <h1 id="headline">Twitter Rules</h1>
                        <div className={styles.preface}>
                            <p>Twitter's <a href="https://help.twitter.com/en/rules-and-policies" target="_blank" rel="noopener noreferrer">terms of service</a> are expansive, addressing everything from impersonating a celebrity to sex trafficking. Breaking the terms of service can result in the removal of a specific tweet, flagging the tweet with a pertinent warning message, account suspension, or a permanent account ban. Twitter also has a policy of cooperation with local law enforcement.</p>
                            <p>Despite such a comprehensive list, it may sometimes seem that their rules are not enforced or only enforced arbitrarily. This is due in large part to the complex nature of social media. A company like Twitter must strive to keep a large, open, and active userbase in order to yield a profit and please investors. This runs counter to banning or deleting large swaths of user accounts. Plus they must find the nearly impossible balance between allowing open discourse and banning hate speech. Given the current polarized state of politics and society at large, Twitter's job of enforcing policy has become ever more challenging.</p>
                            <p>If you believe an account has violated Twitter's terms of service, your only recourse is to report the account. Instructions may be found <a href="https://help.twitter.com/en/rules-and-policies/twitter-report-violation" target="_blank" rel="noopener noreferrer">here</a>. Once reported, Twitter will begin a review process which considers the context of the violation, the history of the account, and the history of the account that reported the violation. Note that it is not advisable to report accounts for minor violations or merely because you disagree with the content of a tweet, as it may have a negative impact on your account.</p>
                        </div>
                    </section>
                    <section className={styles.mainContent}>
                        <section className={styles.mainContent} aria-labelledby="authenticity">
                            <h3 id="authenticity">Authenticity</h3>
                            <ul>
                                <li>
                                    <p><strong>Platform manipulation and spam</strong>: You may not use Twitter’s services in a manner intended to artificially amplify or suppress information or engage in behavior that manipulates or disrupts people’s experience on Twitter.</p>
                                </li>
                                <li>
                                    <p><strong>Election integrity</strong>: You may not use Twitter’s services for the purpose of manipulating or interfering in elections. This includes posting or sharing content that may suppress voter turnout or mislead people about when, where, or how to vote.</p>
                                </li>
                                <li>
                                    <p><strong>Impersonation</strong>: You may not impersonate individuals, groups, or organizations in a manner that is intended to or does mislead, confuse, or deceive others.</p>
                                </li>
                                <li>
                                    <p><strong>Synthetic and manipulated media</strong>: You may not deceptively share synthetic or manipulated media that are likely to cause harm. In addition, we may label Tweets containing synthetic and manipulated media to help people understand their authenticity and to provide additional context.</p>
                                </li>
                                <li>
                                    <p><strong>Copyright and trademark</strong>: You may not violate others’ intellectual property rights, including copyright and trademark.</p>
                                </li>
                            </ul>
                        </section>
                        <section className={styles.mainContent} aria-labelledby="safety">
                            <h3 id="safety">Safety</h3>
                            <ul>
                                <li>
                                    <p><strong>Violence</strong>: You may not threaten violence against an individual or a group of people. We also prohibit the glorification of violence. Learn more about our violent threat and glorification of violence policies.</p>
                                </li>
                                <li>
                                    <p><strong>Terrorism/violent extremism</strong>: You may not threaten or promote terrorism or violent extremism.</p>
                                </li>
                                <li>
                                    <p><strong>Child sexual exploitation</strong>: We have zero tolerance for child sexual exploitation on Twitter.</p>
                                </li>
                                <li>
                                    <p><strong>Abuse/harassment</strong>: You may not engage in the targeted harassment of someone, or incite other people to do so. This includes wishing or hoping that someone experiences physical harm.</p>
                                </li>
                            </ul>
                        </section>
                        <section className={styles.mainContent} aria-labelledby="privacy">
                            <h3 id="privacy">Privacy</h3> 
                            <ul>
                                <li>
                                    <p><strong>Private information</strong>: You may not publish or post other people's private information (such as home phone number and address) without their express authorization and permission. We also prohibit threatening to expose private information or incentivizing others to do so.</p>
                                </li>
                                <li>
                                    <p><strong>Non-consensual nudity</strong>: You may not post or share intimate photos or videos of someone that were produced or distributed without their consent.</p>
                                </li>
                            </ul>
                        </section>
                    </section>
                </article>
            </main>
            <CookieModal />
        </React.Fragment>
    )
};

export default TwitterRules;
