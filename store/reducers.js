import { combineReducers } from 'redux';
import { actionTypes, TwitterSearchResultDefault } from './actions';
import { HYDRATE } from 'next-redux-wrapper';

/********************************** Reducers *************************************/
export function twitterSearchResult(state = TwitterSearchResultDefault, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.twitterSearchResult };
        }
        case actionTypes.TWITTER_SEARCH_PUT: {
            return { ...state, ...action.payload };
        }
        case actionTypes.TWITTER_SEARCH_CLEAR: {
            return TwitterSearchResultDefault;
        }
        default: {
            return state;
        }
    }
};

/******************************* Root Reducer *************************************/
export default combineReducers({
    twitterSearchResult
});
