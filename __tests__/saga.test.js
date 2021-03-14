import { expectSaga } from 'redux-saga-test-plan';
import { getTwitterSearchWorker, getTwitterSearchWatcher } from '../store/sagas';
import { twitterSearchResult } from '../store/reducers';
import { twitterSearchPut, twitterSearchFetch } from '../store/actions';
import { mockTwitterReduxObject, mockTwitterApiObject } from '../__mocks__/';

describe('getTwitterSearch watcher and worker', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockTwitterApiObject) });
    it('listens for action and gets and puts data', () => {
        expectSaga(getTwitterSearchWatcher)
            .dispatch(twitterSearchFetch())
            .call(getTwitterSearchWorker)
            .put(twitterSearchPut(mockTwitterReduxObject))
            .withReducer(twitterSearchResult)
            .hasFinalState(mockTwitterReduxObject)
            .run();
    });
});
