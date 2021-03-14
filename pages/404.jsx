import React from 'react';
import styles from './pages.module.scss';

const Error = ({ statusCode }) => {
    return (
        <React.Fragment>
            <article className={styles.root}>
                <section className={styles.error}>
                    <h1>Page Not Found</h1>
                </section>
            </article>
        </React.Fragment>
    )
};

export default Error;
