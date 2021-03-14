import { twitterSearchResult } from '../store/reducers';
import { twitterSearchPut, twitterSearchClear, TwitterSearchResultDefault } from '../store/actions';

describe('twitterSearchResult', () => {
    it('should return the initial state', () => {
        const actualResult = twitterSearchResult(undefined, twitterSearchPut({}));
        expect(actualResult).toEqual(TwitterSearchResultDefault);
    })

    it('should put a new user', () => {
        const actualResult = twitterSearchResult(undefined, twitterSearchPut(TwitterSearchResultDefault));
        expect(actualResult).toEqual(TwitterSearchResultDefault);
    })

    it('should clear user', () => {
        const actualResult = twitterSearchResult(undefined, twitterSearchClear());
        expect(actualResult).toEqual(TwitterSearchResultDefault);
    })
})
