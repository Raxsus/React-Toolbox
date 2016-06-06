import { takeLatest } from 'redux-saga';
import { call, fork, cancel, put, take, actionChannel } from 'redux-saga/effects';
import {
    RECIEVE_SEARCH_CREDENTIALS,
    REQUEST_SHOP_ITEMS,
    REQUEST_SHOP_CATEGORIES,
    INIT_SEARCH,
    REINIT_SEARCH,
    reinitSearch,
    requestSearchCredentials
} from '../actions';
import { createSearch } from '../helpers';
import { getSearchData } from './selectors';
import { requestShopItems, requestShopCategories } from './shop';


// TODO: all this logic is searchFlow, this should be in the another file and shop.js should call searchFlow saga.

function* shopCallWrapper(saga, search, action) {
    try {
        yield call(saga, search, action);
    } catch(e) {
        // TODO: should catch only SOME type of errors for reinit, not all.
        yield put(reinitSearch());
    }
}

function* shopSagaWrapper(channel, saga, search) {
    yield* takeLatest(channel, shopCallWrapper, saga, search);
}

function* initSearchSaga(channels) {
    const recieveCredentialsChannel = yield actionChannel(RECIEVE_SEARCH_CREDENTIALS);
    yield put(requestSearchCredentials());

    const search = createSearch(yield take(recieveCredentialsChannel));
    for(let v of channels) {
        yield fork(shopSagaWrapper, v.channel, v.saga, search);
    }
}

function* searchFlowSaga(actions) {
    for(let i of actions) {
        i.channel = yield actionChannel(i.action);
    }

    yield take(INIT_SEARCH);

    while (true) {
        const search = yield fork(initSearchSaga, actions);
        yield take(REINIT_SEARCH);
        yield cancel(search);
    }
}

export function* watchSearch() {
    yield searchFlowSaga([
        {
            action: REQUEST_SHOP_ITEMS,
            saga: requestShopItems
        },
        {
            action: REQUEST_SHOP_CATEGORIES,
            saga: requestShopCategories
        }
    ]);
}
