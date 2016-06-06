import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects'
import {
    CHANGE_VALUE,
    CHANGE_CATEGORY,
    requestShopItems,
    requestShopCategories,
    requestShopItemsInCategory
} from '../actions';

function* changeValueSaga(action) {
    yield put(requestShopItems(action.value));
    yield put(requestShopCategories(action.value));
}

function* changeCategorySaga(action) {
    yield put(requestShopItemsInCategory(action.value, action.category));
}

export function* watchChangeValue() {
    yield* takeLatest(CHANGE_VALUE, changeValueSaga);
}


export function* watchChangeCategory() {
    yield* takeLatest(CHANGE_CATEGORY, changeCategorySaga);
}
