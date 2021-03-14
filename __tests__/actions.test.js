import * as actions from '../store/actions';

describe('twitterSearchPut', () => {
    it('creates a TWITTER_SEARCH_PUT action object', () => {
        const expectedAction = {
            type: actions.actionTypes.TWITTER_SEARCH_PUT,
            payload: actions.TwitterSearchResultDefault
        };
        expect(actions.twitterSearchPut()).toEqual(expectedAction);
    })
})

describe('twitterSearchClear', () => {
    it('creates a TWITTER_SEARCH_CLEAR action object', () => {
        const expectedAction = {
            type: actions.actionTypes.TWITTER_SEARCH_CLEAR,
            payload: actions.TwitterSearchResultDefault
        };
        expect(actions.twitterSearchClear()).toEqual(expectedAction);
    })
})

describe('twitterSearchFetch', () => {
    it('creates a TWITTER_SEARCH_FETCH action object', () => {
        const expectedAction = {
            type: actions.actionTypes.TWITTER_SEARCH_FETCH,
            payload: {}
        };
        expect(actions.twitterSearchFetch()).toEqual(expectedAction);
    })
})
