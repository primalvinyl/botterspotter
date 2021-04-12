import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import copy from 'copy-to-clipboard';
import DonutChart from './presentation/DonutChart';
import { TwitterSearchResultDefault } from '../store/actions';
import styles from './TwitterSearchResult.module.scss';

const TwitterSearchResult = ({ testResult }) => {
    let {
        name,
        screen_name,
        profile_image_url_https,
        score,
        score_reasons, 
        score_conclusion,
        error
    } = testResult;
    const newScore = parseInt(score);
    const userLink = screen_name && `https://twitter.com/${screen_name}`;
    const pageLink = screen_name && `https://botterspotter.com/${screen_name}`;
    const score_reasonsList = score_reasons && score_reasons.map((reason, i) =>
        <li key={i}>{reason}</li>
    );
    let testResultColor = styles.scorePass;
    let testResultStyle = 'na';

    if (error) {
        testResultColor = styles.scorePass;
        testResultStyle = 'na';
        name = 'User Not Found';
    } else if (newScore >= 8) {
        testResultColor = styles.scoreFail;
        testResultStyle = 'fail';
    } else if (newScore >= 5) {
        testResultColor = styles.scoreWarn;
        testResultStyle = 'warn';
    } else if (newScore >= 0) {
        testResultColor = styles.scorePass;
        testResultStyle = 'pass';
    }

    return (
        <article className={styles.root} aria-labelledby="name">
            <section className={`${styles.profile} ${styles[testResultStyle]}`}>
                <figure className={styles.avatar}>
                    <Avatar alt={screen_name} src={profile_image_url_https} />
                </figure>
                <div>
                    <a href={userLink} target="_blank" rel="noopener noreferrer">
                        <h1 id="name" aria-label="Name">{name}</h1>
                        {screen_name && <p aria-label="Screen Name">@{screen_name}</p>}
                    </a>
                </div>
            </section>
            { !error &&
                <div className={`${styles.result} ${styles[testResultStyle]}`}>
                    <section className={styles.score} aria-labelledby="score">
                        <h2 id="score"><span>BotterSpotter.com</span> Score</h2>
                        <DonutChart
                            end={newScore}
                            circleColor={testResultColor} />
                    </section>
                    <div>
                        <section aria-labelledby="conclusion">
                            <h3 id="conclusion">{score_conclusion}</h3>
                            <ul>{score_reasonsList}</ul>
                        </section>
                        <section className={styles.buttonContainer} aria-label="Share Results">
                            <Button
                                variant="contained"
                                endIcon={<Icon>content_copy</Icon>}
                                className={styles.button}
                                onClick={() => copy(pageLink)}>
                                Copy Link
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<Icon>chat</Icon>}
                                className={styles.button}
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(pageLink)}`}>
                                Tweet Result
                            </Button>
                        </section>
                    </div>
                </div>
            }
        </article>
    )
};

TwitterSearchResult.defaultProps = {
    testResult: TwitterSearchResultDefault
};

export default TwitterSearchResult;
