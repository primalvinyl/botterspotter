/****************************** Types & Defaults *************************************/
export const actionTypes = {
    TWITTER_SEARCH_FETCH: 'TWITTER_SEARCH_FETCH',
    TWITTER_SEARCH_PUT: 'TWITTER_SEARCH_PUT',
    TWITTER_SEARCH_CLEAR: 'TWITTER_SEARCH_CLEAR',
    HYDRATE: 'HYDRATE',
};
export const TwitterSearchResultDefault = {
    name: '',
    screen_name: '',
    profile_image_url: '',
    score: '',
    score_conclusion: '',
    score_reasons: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};

/******************************* Reducer Actions *************************************/
export const twitterSearchPut = (payload = TwitterSearchResultDefault) => {
    return {
        type: actionTypes.TWITTER_SEARCH_PUT,
        payload
    };
};

export const twitterSearchClear = () => {
    return {
        type: actionTypes.TWITTER_SEARCH_CLEAR,
        payload: TwitterSearchResultDefault
    };
};

/******************************* Saga Actions *************************************/
export const twitterSearchFetch = (payload = {}) => {
    return {
        type: actionTypes.TWITTER_SEARCH_FETCH,
        payload
    };
};

export default actionTypes;
