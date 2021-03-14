import React from 'react';
import { END } from 'redux-saga';
import { wrapper } from '../store';
import HomePage from '../components/HomePage';
import { twitterSearchFetch } from '../store/actions';

const HomePageWithUser = () => <HomePage />;
// populate store serverside
// this code is not sent to the client
export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req }) => {
    const username = req.url.slice(1);
    store.dispatch(twitterSearchFetch({ username }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
});

export default HomePageWithUser;
