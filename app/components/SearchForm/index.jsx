import React from 'react';

import SearchField from '../SearchField/index.jsx'
import FacetsForm from '../FacetsForm/index.jsx'

import style from './style';

const Header = () => (
    <div className={style.searchForm}>
      <SearchField />
      <FacetsForm />
    </div>
);

export default Header;
