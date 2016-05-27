// You can also include here commons if you want with import 'react-toolbox/lib/commons';
import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-toolbox/lib/button';
import Header from './components/Header/index';
import ItemsList from './components/ItemsList/index';

import style from './style';

ReactDOM.render((
  <div>
    <Header />
    <ItemsList />      
  </div>
), document.getElementById('app'));
