import { takeEvery } from 'redux-saga';

export function* watchAndLog() {
    yield* takeEvery('*', function* logger(action) {
        console.log('ACTION', action);
    })
}
