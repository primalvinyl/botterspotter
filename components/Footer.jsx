import React from 'react';
import Link from './presentation/Link';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.root}>
            <nav aria-label="Utility Navigation">
                <ul>
                    <li>
                        {'© '}{new Date().getFullYear()}{ ' ' }
                        <Link href="/">
                            Botter Spotter
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
