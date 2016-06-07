import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/index';
import {SearchItemsList} from './containers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { initSearch } from './actions';
import shopApp from './reducers';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(shopApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

window.__store = store;
store.dispatch(initSearch());

ReactDOM.render((
    <Provider store={store}>
        <div>
            <Header />
            <SearchItemsList />
        </div>
    </Provider>
), document.getElementById('app'));

// ReactDOM.render((
//     <div store="store">
//         <Header />
//         <ItemsList />
//     </div>
// ), document.getElementById('app'));