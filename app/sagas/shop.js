import { call, put } from 'redux-saga/effects'
import {
    recieveShopItems,
    recieveShopCategories
} from '../actions';


function* shopQueryHelper(actionCreator, search, action) {
    const result = yield call(() => search.search(action.query, action.params));
    yield put(actionCreator(result));
}

export function* requestShopItems(search, action) {
    yield call(shopQueryHelper, recieveShopItems, search, action);
}

export function* requestShopCategories(search, action) {
    yield call(shopQueryHelper, recieveShopCategories, search, action);
}
