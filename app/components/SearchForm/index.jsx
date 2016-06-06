import React from 'react';

import {SearchInput, SearchFacets} from '../../containers/index'

import style from './style';

const Header = () => (
    <div className={style.searchForm}>
      <SearchInput />
      <SearchFacets />
    </div>
);

export default Header;
