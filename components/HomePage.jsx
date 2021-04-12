import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grow from '@material-ui/core/Grow';
import TwitterSearchResult from '../components/TwitterSearchResult';
import SearchForm from '../components/SearchForm';
import CookieModal from './presentation/CookieModal';
import { twitterSearchFetch, twitterSearchClear } from '../store/actions';
import styles from './HomePage.module.scss';
import { Divider } from '@material-ui/core';

const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#35ffff',
    },
    barColorPrimary: {
      backgroundColor: '#ff0cff',
    },
})(LinearProgress);

const HomePage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const twitterSearchResult = useSelector(state => state.twitterSearchResult);
    const { request_status, screen_name, score, score_conclusion } = twitterSearchResult;
    const screenName = (router && router.query.username) || screen_name;
    const title = !!screenName && `Botter Spotter score for ${screenName}: ${score}` || 'Find Twitter Bots and Trolls';
    const description = !!score_conclusion && `${score_conclusion}` || 'Enter a Twitter username and get their bot score and a brief summary';

    const changeHandler = () => {
        if (request_status === 'resolved') resetHandler();
    };

    const submitHandler = async username => {
        dispatch(twitterSearchFetch({ username }));
        history.pushState({}, '', `/${username}`);
    };

    const resetHandler = () => {
        dispatch(twitterSearchClear());
        history.replaceState({}, '', '/');
    };

    // adds screen_name to URL when searched
    React.useEffect(() => {
        if (screenName) history.pushState({}, '', `/${screenName}`);
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} key="sitetitle" />
                <meta property="og:description" content={description} key="sitedescription" />
                <meta property="og:url" content={`https://botterspotter.com/${screenName}`} key="siteurl" />
                <meta property="og:image" content={`https://botterspotter.com/images/score-${score}.png`} key="siteimage" />
            </Head>
            <main>
                <div className={styles.searchContainer}>
                    {screenName !== undefined &&
                        <SearchForm
                            id="search-field"
                            className={styles.searchField}
                            value={screenName}
                            submitMethod={submitHandler}
                            resetMethod={resetHandler}
                            onChangeMethod={changeHandler}
                            disabled={request_status === 'pending'}
                            placeholder="Enter a Twitter username"
                            startAdornment="@" />
                    }
                    {request_status === 'pending' &&
                        <ColorLinearProgress role="progressbar" />
                    }
                </div>
                {request_status === 'resolved' &&
                    <Grow in={ request_status === 'resolved' } >
                        <div className={styles.resultContainer}>
                            <TwitterSearchResult testResult={twitterSearchResult} />
                        </div>
                    </Grow>
                }
            </main> 
            <CookieModal />
        </React.Fragment>
    );
};

export default HomePage;
