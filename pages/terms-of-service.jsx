import React from 'react';
import Head from 'next/head';
import styles from './pages.module.scss';

const TermsOfService = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Botter Spotter - Terms of Service</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="keywords" content="" />
                <meta httpEquiv="author" content="" key="author" />
                <meta name="twitter:card" content="" />
                <meta name="twitter:site" content="" />
                <meta name="description" content="" />
                <meta property="og:title" content="" key="sitetitle" />
                <meta property="og:description" content="" key="sitedescription" />
                <meta property="og:url" content="" key="siteurl" />
                <meta property="og:image" content="" key="siteimage" />
                <meta property="og:site_name" content="" key="sitename" />
            </Head>
            <article className={styles.root}>
                <section className={styles.headContent}>
                    <h1>Terms of Service</h1>
                    <div className={styles.preface}>
                        <p>The services provided by this website are subject to the conditions stated below. Every time you visit this website or use its services, you accept the following conditions. We urge you to read them carefully.</p>
                    </div>
                </section>
                <section className={styles.mainContent}>
                    <h3>Privacy Policy</h3>
                    <p>This privacy policy will help you understand how Botter Spotter uses and protects the data you provide to us when you visit and use the service.</p>
                    <p>We reserve the right to change this policy at any time. If you want to make sure that you are up to date with the latest changes, we advise you to visit this page.</p>

                    <ul>
                        <li>
                            <p><strong>What User Data We Collect</strong>: When you visit the Botter Spotter website, we collect an anonymous data profile regarding your online behavior on our website.</p>
                        </li>
                        <li>
                            <p><strong>Why We Collect Your Data</strong>: We collect this data for several reasons; to better understand your needs, to improve our services and products, and to customize our website according to your online behavior and personal preferences.</p>
                        </li>
                        <li>
                            <p><strong>Safeguarding and Securing the Data</strong>: Botter Spotter is committed to securing your data and keeping it confidential. Botter Spotter has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.</p>
                        </li>
                        <li>
                            <p><strong>Our Cookie Policy</strong>: Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic to Botter Spotter, Botter Spotter web pages you spend the most time on).</p>
                            <p>The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.</p>
                            <p>Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.</p>
                            <p>If you want to disable cookies, you can do so by accessing the settings of your internet browser.</p>
                        </li>
                        <li>
                            <p><strong>Links to Other Websites</strong>: Our website contains links that lead to other websites. If you click on these links, Botter Spotter is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.</p>
                        </li>
                        <li>
                            <p><strong>Restricting the Collection of your Personal Data</strong>: At some point, you might wish to restrict the use and collection of your personal data. If you have already agreed to share your information with us, feel free to <a href="/contact-us">contact us</a> and we will be more than happy to change this for you.</p>
                        </li>
                        <li>
                            <p><strong>Google</strong>: Botter Spotter implements Google Analytics for monitoring site metrics and ReCAPTCHA for protection against attacks. Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> are also applicable to users of this site.</p>
                        </li>
                        <li>
                            <p>Botter Spotter will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.</p>
                        </li>
                    </ul>

                    <h3>Copyright</h3>
                    <p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Botter Spotter and/or its content creators and protected by international copyright laws.</p>

                    <h3>Communications</h3>
                    <p>The entirety of communication with us is electronic. Each time you submit a form or visit our website, you are communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you will receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.</p>

                    <h3>Applicable Law</h3>
                    <p>By visiting this website, you agree that the laws of the United States, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Botter Spotter and you, or its business partners and associates.</p>

                    <h3>Disputes</h3>
                    <p>Any dispute related in any way to your visit to this website shall be arbitrated by state or federal court and you consent to exclusive jurisdiction and venue of such courts.</p>

                    <h3>Comments, Reviews, and Emails</h3>
                    <p>Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation.</p>
                    <p>We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant Botter Spotter non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.</p>

                    <h3>License and Site Access</h3>
                    <p>We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.</p>

                    <h3>User Account</h3>
                    <p>If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.</p>
                    <p>We reserve all rights to terminate accounts and edit or remove content by our sole discretion.</p>
                </section>
            </article>
        </React.Fragment>
    )
};

export default TermsOfService;
