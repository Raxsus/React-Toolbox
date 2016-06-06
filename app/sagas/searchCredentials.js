import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { REQUEST_SEARCH_CREDENTIALS, recieveSearchCredentials } from '../actions';

function* requestSearchCredentials(action) {
    const response = yield call(fetch, '//genie.fillo.me/get_biv_search_token');
    yield put(recieveSearchCredentials(
        response.headers.get('Search-STK'),
        response.headers.get('Search-STH'),
        response.headers.get('Search-ALID'),
        response.headers.get('Search-ALINDEX')
    ));
}

export function* watchRequestSearchCredentials() {
    yield* takeLatest(REQUEST_SEARCH_CREDENTIALS, requestSearchCredentials);
}
