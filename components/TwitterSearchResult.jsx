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
        <div className={styles.root}>
            <div className={`${styles.profile} ${styles[testResultStyle]}`}>
                <div className={styles.avatar}>
                    <Avatar alt={screen_name} src={profile_image_url_https} />
                </div>
                <div>
                    { error &&
                        <h3>{name}</h3>
                        ||
                        <a href={userLink} target="_blank" rel="noopener noreferrer">
                            <h3>{name}</h3>
                            <p>@{screen_name}</p> 
                        </a>
                    }
                </div>
            </div>
            { !error &&
                <div className={`${styles.result} ${styles[testResultStyle]}`}>
                    <div className={styles.score}>
                        <p>BotterSpotter.com</p>
                        <h1>Score</h1>
                        <DonutChart
                            end={newScore}
                            circleColor={testResultColor}
                            pathColor={'#212529'}
                            textColor={'#212529'} />
                    </div>
                    <div>
                        <h2>{score_conclusion}</h2>
                        <ul>{score_reasonsList}</ul>
                        <div className={styles.buttonContainer}>
                            <Button
                                variant="contained"
                                endIcon={<Icon>content_copy</Icon>}
                                className={styles.button}
                                onClick={() => copy(pageLink)}>
                                Copy URL
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<Icon>chat</Icon>}
                                className={styles.button}
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(pageLink)}`}>
                                Tweet
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

TwitterSearchResult.defaultProps = {
    testResult: TwitterSearchResultDefault
};

export default TwitterSearchResult;
