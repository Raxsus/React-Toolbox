import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/index';
import ItemsList from './components/ItemsList/index';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Header />
                <ItemsList />
            </div>
        );
    }
}

ReactDOM.render((
    <Shop />
), document.getElementById('app'));