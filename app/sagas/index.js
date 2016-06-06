import { watchRequestSearchCredentials } from './searchCredentials';
import { watchSearch } from './search';
import { watchChangeValue, watchChangeCategory } from './changeShop';
import { watchAndLog } from './logger';

export default function* rootSaga() {
    yield [
        watchRequestSearchCredentials(),
        watchSearch(),
        watchChangeValue(),
        watchChangeCategory(),
        watchAndLog()
    ]
}
