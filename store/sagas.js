import { put, call, fork, all, take } from 'redux-saga/effects';
import { twitterSearchPut, actionTypes } from './actions';
import { twitterSearchRequest } from './services';

/******************************** Workers *************************************/
export function* getTwitterSearchWorker(payload) {
    try {
        yield put(twitterSearchPut({ request_status: 'pending' }));
        const response = yield call(twitterSearchRequest, payload);
        yield put(twitterSearchPut({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(twitterSearchPut({ error: true, request_status: 'resolved' }));
    }
}

/******************************* Watchers *************************************/
export function* getTwitterSearchWatcher() {
    while (true){
        const { payload } = yield take(actionTypes.TWITTER_SEARCH_FETCH);
        yield call(getTwitterSearchWorker, payload);
    }
}

/******************************* Root Saga ************************************/
export default function* rootSaga() {
    yield all([
        fork(getTwitterSearchWatcher)
    ]);
}
